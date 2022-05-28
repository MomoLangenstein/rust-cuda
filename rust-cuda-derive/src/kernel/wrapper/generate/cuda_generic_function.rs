use proc_macro2::TokenStream;

use super::super::{DeclGenerics, FuncIdent};

pub(in super::super) fn quote_cuda_generic_function(
    DeclGenerics {
        generic_start_token,
        generic_kernel_params: generic_params,
        generic_close_token,
        generic_kernel_where_clause: generic_where_clause,
        ..
    }: &DeclGenerics,
    func_inputs: &syn::punctuated::Punctuated<syn::FnArg, syn::token::Comma>,
    FuncIdent { func_ident, .. }: &FuncIdent,
    func_attrs: &[syn::Attribute],
    func_block: &syn::Block,
) -> TokenStream {
    let target_os = match proc_macro::tracked_env::var("CARGO_CFG_TARGET_OS") {
        Ok(target_os) => target_os,
        Err(err) => abort_call_site!("Failed to read target OS: {:?}", err),
    };

    if target_os != "cuda" {
        return quote!();
    }

    quote! {
        #(#func_attrs)*
        fn #func_ident #generic_start_token #generic_params #generic_close_token (#func_inputs)
            #generic_where_clause
        #func_block
    }
}
