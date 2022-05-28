use std::{
    env, fs,
    io::{Read, Write},
    path::{Path, PathBuf},
    sync::atomic::{AtomicBool, Ordering},
};

use colored::Colorize;
use proc_macro::TokenStream;
use ptx_builder::{
    builder::{BuildStatus, Builder, MessageFormat, Profile},
    error::{BuildErrorKind, Error, Result},
};

use super::utils::skip_kernel_compilation;

mod config;
mod error;

use config::{CheckKernelConfig, LinkKernelConfig};
use error::emit_ptx_build_error;

pub fn check_kernel(tokens: TokenStream) -> TokenStream {
    proc_macro_error::set_dummy(quote! {
        "ERROR in this PTX compilation"
    });

    let CheckKernelConfig {
        args,
        crate_name,
        crate_path,
    } = match syn::parse_macro_input::parse(tokens) {
        Ok(config) => config,
        Err(err) => {
            abort_call_site!(
                "check_kernel!(ARGS NAME PATH) expects ARGS identifier, NAME and PATH string \
                 literals: {:?}",
                err
            )
        },
    };

    let kernel_ptx = compile_kernel(&args, &crate_name, &crate_path, Specialisation::Check);

    match kernel_ptx {
        Some(kernel_ptx) => quote!(#kernel_ptx).into(),
        None => quote!("ERROR in this PTX compilation").into(),
    }
}

#[allow(clippy::module_name_repetitions)]
pub fn link_kernel(tokens: TokenStream) -> TokenStream {
    proc_macro_error::set_dummy(quote! {
        const PTX_STR: &'static str = "ERROR in this PTX compilation";
    });

    let LinkKernelConfig {
        kernel,
        args,
        crate_name,
        crate_path,
        specialisation,
    } = match syn::parse_macro_input::parse(tokens) {
        Ok(config) => config,
        Err(err) => {
            abort_call_site!(
                "link_kernel!(KERNEL ARGS NAME PATH SPECIALISATION) expects KERNEL and ARGS \
                 identifiers, NAME and PATH string literals, and SPECIALISATION tokens: {:?}",
                err
            )
        },
    };

    if skip_kernel_compilation() {
        return quote! {
            const PTX_STR: &'static str = "CLIPPY skips specialised PTX compilation";
        }
        .into();
    }

    let mut kernel_ptx = match compile_kernel(
        &args,
        &crate_name,
        &crate_path,
        Specialisation::Link(&specialisation),
    ) {
        Some(kernel_ptx) => kernel_ptx,
        None => {
            return (quote! {
                const PTX_STR: &'static str = "ERROR in this PTX compilation";
            })
            .into()
        },
    };

    let kernel_layout_name = if specialisation.is_empty() {
        format!("{}_type_layout_kernel", kernel)
    } else {
        format!(
            "{}_type_layout_kernel_{:016x}",
            kernel,
            seahash::hash(specialisation.as_bytes())
        )
    };

    let mut type_layouts = Vec::new();

    let type_layout_start_pattern = format!("\n\t// .globl\t{}", kernel_layout_name);

    if let Some(type_layout_start) = kernel_ptx.find(&type_layout_start_pattern) {
        let after_type_layout_start = type_layout_start + type_layout_start_pattern.len();

        let type_layout_middle = after_type_layout_start
            + match kernel_ptx[after_type_layout_start..]
                .find(&format!(".visible .entry {}", kernel_layout_name))
            {
                Some(middle) => middle,
                None => abort_call_site!(
                    "Kernel compilation generated invalid PTX: incomplete type layout information."
                ),
            };

        let mut next_type_layout = after_type_layout_start;

        const BEFORE_PARAM_PATTERN: &str = "\n.global .align 1 .b8 ";
        const PARAM_LEN_PATTERN: &str = "[";
        const LEN_BYTES_PATTERN: &str = "] = {";
        const AFTER_BYTES_PATTERN: &str = "};\n";
        const BYTES_PARAM_PATTERN: &str = "};";

        while let Some(param_start_offset) =
            kernel_ptx[next_type_layout..type_layout_middle].find(BEFORE_PARAM_PATTERN)
        {
            let param_start = next_type_layout + param_start_offset + BEFORE_PARAM_PATTERN.len();

            if let Some(len_start_offset) =
                kernel_ptx[param_start..type_layout_middle].find(PARAM_LEN_PATTERN)
            {
                let len_start = param_start + len_start_offset + PARAM_LEN_PATTERN.len();

                if let Some(bytes_start_offset) =
                    kernel_ptx[len_start..type_layout_middle].find(LEN_BYTES_PATTERN)
                {
                    let bytes_start = len_start + bytes_start_offset + LEN_BYTES_PATTERN.len();

                    if let Some(bytes_end_offset) =
                        kernel_ptx[bytes_start..type_layout_middle].find(AFTER_BYTES_PATTERN)
                    {
                        let param = &kernel_ptx[param_start..(param_start + len_start_offset)];
                        let len = &kernel_ptx[len_start..(len_start + bytes_start_offset)];
                        let bytes = &kernel_ptx[bytes_start..(bytes_start + bytes_end_offset)];

                        let param = quote::format_ident!("{}", param);

                        let len = match len.parse::<usize>() {
                            Ok(len) => len,
                            Err(err) => {
                                abort_call_site!(
                                    "Kernel compilation generated invalid PTX: {}",
                                    err
                                )
                            },
                        };

                        let bytes: Vec<u8> =
                            match bytes.split(", ").map(std::str::FromStr::from_str).collect() {
                                Ok(len) => len,
                                Err(err) => {
                                    abort_call_site!(
                                        "Kernel compilation generated invalid PTX: {}",
                                        err
                                    )
                                },
                            };
                        let byte_str = syn::LitByteStr::new(&bytes, proc_macro2::Span::call_site());

                        type_layouts.push(quote! {
                            const #param: &[u8; #len] = #byte_str;
                        });

                        next_type_layout =
                            bytes_start + bytes_end_offset + BYTES_PARAM_PATTERN.len();
                    } else {
                        next_type_layout = bytes_start;
                    }
                } else {
                    next_type_layout = len_start;
                }
            } else {
                next_type_layout = param_start;
            }
        }

        let type_layout_end = type_layout_middle
            + match kernel_ptx[type_layout_middle..].find('}') {
                Some(stop) => stop,
                None => abort_call_site!("Kernel compilation generated invalid PTX"),
            }
            + '}'.len_utf8();

        kernel_ptx.replace_range(type_layout_start..type_layout_end, "");
    }

    (quote! { const PTX_STR: &'static str = #kernel_ptx; #(#type_layouts)* }).into()
}

fn compile_kernel(
    args: &syn::Ident,
    crate_name: &str,
    crate_path: &Path,
    specialisation: Specialisation,
) -> Option<String> {
    if let Ok(rust_flags) = proc_macro::tracked_env::var("RUSTFLAGS") {
        env::set_var(
            "RUSTFLAGS",
            rust_flags
                .replace("-Zinstrument-coverage", "")
                .replace("-Cinstrument-coverage", ""),
        );
    }

    let specialisation_var = format!(
        "RUST_CUDA_DERIVE_SPECIALISE_{}_{}_{}",
        crate_name,
        match specialisation {
            Specialisation::Check => String::from("CHECK"),
            Specialisation::Link(specialisation) => {
                format!("{:016X}", seahash::hash(specialisation.as_bytes()))
            },
        },
        args.to_string().to_uppercase(),
    );

    if let Ok(kernel_path) =
        build_kernel_with_specialisation(crate_path, &specialisation_var, specialisation)
    {
        let mut file = fs::File::open(&kernel_path)
            .unwrap_or_else(|_| panic!("Failed to open kernel file at {:?}.", &kernel_path));

        let mut kernel_ptx = String::new();

        file.read_to_string(&mut kernel_ptx)
            .unwrap_or_else(|_| panic!("Failed to read kernel file at {:?}.", &kernel_path));

        colored::control::set_override(true);
        eprintln!(
            "{} {} compiling a PTX crate.",
            "[PTX]".bright_black().bold(),
            "Finished".green().bold()
        );
        colored::control::unset_override();

        Some(kernel_ptx)
    } else {
        emit_ptx_build_error();

        None
    }
}

#[allow(clippy::too_many_lines)]
fn build_kernel_with_specialisation(
    kernel_path: &Path,
    env_var: &str,
    specialisation: Specialisation,
) -> Result<PathBuf> {
    match specialisation {
        Specialisation::Check => env::set_var(env_var, "chECK"),
        Specialisation::Link(specialisation) => env::set_var(env_var, specialisation),
    };

    let result = (|| {
        let mut builder = Builder::new(kernel_path)?;

        builder = match specialisation {
            Specialisation::Check => builder.set_profile(Profile::Debug),
            Specialisation::Link(_) => builder.set_profile(Profile::Release),
        };

        builder = builder.set_message_format(MessageFormat::Json {
            render_diagnostics: false,
            short: false,
            ansi: true,
        });

        let specialisation_prefix = match specialisation {
            Specialisation::Check => String::from("check"),
            Specialisation::Link(specialisation) => {
                format!("{:016x}", seahash::hash(specialisation.as_bytes()))
            },
        };
        builder = builder.set_prefix(specialisation_prefix.clone());

        let any_output = AtomicBool::new(false);
        let crate_name = String::from(builder.get_crate_name());

        match builder.build_live(
            |stdout_line| {
                if let Ok(cargo_metadata::Message::CompilerMessage(mut message)) =
                    serde_json::from_str(stdout_line)
                {
                    if any_output
                        .compare_exchange(false, true, Ordering::Relaxed, Ordering::Relaxed)
                        .is_ok()
                    {
                        colored::control::set_override(true);
                        eprintln!(
                            "{} of {} ({})",
                            "[PTX]".bright_black().bold(),
                            crate_name.bold(),
                            specialisation_prefix,
                        );
                        colored::control::unset_override();
                    }

                    if let Some(rendered) = &mut message.message.rendered {
                        colored::control::set_override(true);
                        let prefix = "  | ".bright_black().bold().to_string();
                        colored::control::unset_override();

                        let glue = String::from('\n') + &prefix;

                        let mut lines = rendered
                            .split('\n')
                            .rev()
                            .skip_while(|l| l.trim().is_empty())
                            .collect::<Vec<_>>();
                        lines.reverse();

                        let mut prefixed = prefix + &lines.join(&glue);

                        std::mem::swap(rendered, &mut prefixed);
                    }

                    eprintln!("{}", serde_json::to_string(&message.message).unwrap());
                }
            },
            |stderr_line| {
                if stderr_line.trim().is_empty() {
                    return;
                }

                if any_output
                    .compare_exchange(false, true, Ordering::Relaxed, Ordering::Relaxed)
                    .is_ok()
                {
                    colored::control::set_override(true);
                    eprintln!(
                        "{} of {} ({})",
                        "[PTX]".bright_black().bold(),
                        crate_name.bold(),
                        specialisation_prefix,
                    );
                    colored::control::unset_override();
                }

                colored::control::set_override(true);
                eprintln!(
                    "  {} {}",
                    "|".bright_black().bold(),
                    stderr_line.replace("   ", "")
                );
                colored::control::unset_override();
            },
        )? {
            BuildStatus::Success(output) => {
                let ptx_path = output.get_assembly_path();

                if let Specialisation::Link(specialisation) = specialisation {
                    fs::OpenOptions::new()
                        .append(true)
                        .open(&ptx_path)
                        .and_then(|mut file| writeln!(file, "\n// {}", specialisation))
                        .map_err(|err| {
                            Error::from(BuildErrorKind::BuildFailed(vec![format!(
                                "Failed to write specialisation to {:?}: {}",
                                ptx_path, err,
                            )]))
                        })?;
                }

                Ok(ptx_path)
            },
            BuildStatus::NotNeeded => Err(Error::from(BuildErrorKind::BuildFailed(vec![format!(
                "Kernel build for specialisation {:?} was not needed.",
                &specialisation
            )]))),
        }
    })();

    env::remove_var(env_var);

    result
}

#[derive(Copy, Clone, Debug)]
enum Specialisation<'a> {
    Check,
    Link(&'a str),
}
