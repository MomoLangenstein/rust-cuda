const CFG_TARGET_OS: &str = "CARGO_CFG_TARGET_OS";

fn main() {
    println!("cargo:rerun-if-env-changed={}", CFG_TARGET_OS);
    println!(
        "cargo:rustc-env={}={}",
        CFG_TARGET_OS,
        std::env::var(CFG_TARGET_OS).unwrap()
    );
}
