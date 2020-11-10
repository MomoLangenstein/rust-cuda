//! NVPTX intrinsics (experimental)
//!
//! These intrinsics form the foundation of the CUDA
//! programming model.
//!
//! The reference is the [CUDA C Programming Guide][cuda_c]. Relevant is also
//! the [LLVM NVPTX Backend documentation][llvm_docs].
//!
//! [cuda_c]:
//! http://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html
//! [llvm_docs]:
//! https://llvm.org/docs/NVPTXUsage.html

#![allow(clippy::missing_safety_doc)]

use core::ffi::c_void;

#[allow(improper_ctypes)]
extern "C" {
    #[link_name = "llvm.nvvm.barrier0"]
    fn syncthreads();
    #[link_name = "llvm.nvvm.read.ptx.sreg.ntid.x"]
    fn block_dim_x() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.ntid.y"]
    fn block_dim_y() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.ntid.z"]
    fn block_dim_z() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.ctaid.x"]
    fn block_idx_x() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.ctaid.y"]
    fn block_idx_y() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.ctaid.z"]
    fn block_idx_z() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.nctaid.x"]
    fn grid_dim_x() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.nctaid.y"]
    fn grid_dim_y() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.nctaid.z"]
    fn grid_dim_z() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.tid.x"]
    fn thread_idx_x() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.tid.y"]
    fn thread_idx_y() -> u32;
    #[link_name = "llvm.nvvm.read.ptx.sreg.tid.z"]
    fn thread_idx_z() -> u32;
}

extern "C" {
    #[no_mangle]
    static grid_id: u32;
}

#[must_use]
#[inline]
pub unsafe fn _grid_id() -> u32 {
    grid_id
}

/// Calculate the base e logarithm of the input argument x.
#[must_use]
#[inline]
pub unsafe fn _log(x: f64) -> f64 {
    #[allow(clippy::cast_possible_truncation)]
    let x: f32 = x as f32;
    let f: f32;

    asm!("lg2.approx.f32 {}, {};", out(reg32) f, in(reg32) x, options(pure, nomem, nostack));

    f64::from(f) / core::f64::consts::LOG2_E
}

/// Calculate the base e exponential of the input argument x.
#[must_use]
#[inline]
pub unsafe fn _exp(x: f64) -> f64 {
    #[allow(clippy::cast_possible_truncation)]
    let x: f32 = (x * core::f64::consts::LOG2_E) as f32;
    let f: f32;

    asm!("ex2.approx.f32 {}, {};", out(reg32) f, in(reg32) x, options(pure, nomem, nostack));

    f64::from(f)
}

/// Synchronizes all threads in the block.
#[inline]
pub unsafe fn _syncthreads() {
    syncthreads()
}

/// x-th thread-block dimension.
#[inline]
#[must_use]
pub unsafe fn _block_dim_x() -> u32 {
    block_dim_x()
}

/// y-th thread-block dimension.
#[inline]
#[must_use]
pub unsafe fn _block_dim_y() -> u32 {
    block_dim_y()
}

/// z-th thread-block dimension.
#[inline]
#[must_use]
pub unsafe fn _block_dim_z() -> u32 {
    block_dim_z()
}

/// x-th thread-block index.
#[inline]
#[must_use]
pub unsafe fn _block_idx_x() -> u32 {
    block_idx_x()
}

/// y-th thread-block index.
#[inline]
#[must_use]
pub unsafe fn _block_idx_y() -> u32 {
    block_idx_y()
}

/// z-th thread-block index.
#[inline]
#[must_use]
pub unsafe fn _block_idx_z() -> u32 {
    block_idx_z()
}

/// x-th block-grid dimension.
#[inline]
#[must_use]
pub unsafe fn _grid_dim_x() -> u32 {
    grid_dim_x()
}

/// y-th block-grid dimension.
#[inline]
#[must_use]
pub unsafe fn _grid_dim_y() -> u32 {
    grid_dim_y()
}

/// z-th block-grid dimension.
#[inline]
#[must_use]
pub unsafe fn _grid_dim_z() -> u32 {
    grid_dim_z()
}

/// x-th thread index.
#[inline]
#[must_use]
pub unsafe fn _thread_idx_x() -> u32 {
    thread_idx_x()
}

/// y-th thread index.
#[inline]
#[must_use]
pub unsafe fn _thread_idx_y() -> u32 {
    thread_idx_y()
}

/// z-th thread index.
#[inline]
#[must_use]
pub unsafe fn _thread_idx_z() -> u32 {
    thread_idx_z()
}

/// Generates the trap instruction `TRAP`
#[inline]
pub unsafe fn trap() -> ! {
    core::intrinsics::abort()
}

// Basic CUDA syscall declarations.
extern "C" {
    /// Print formatted output from a kernel to a host-side output stream.
    ///
    /// Syscall arguments:
    /// * `status`: The status value that is returned by `vprintf`.
    /// * `format`: A pointer to the format specifier input (uses common `printf` format).
    /// * `valist`: A pointer to the valist input.
    ///
    /// ```
    /// #[repr(C)]
    /// struct PrintArgs(f32, f32, f32, i32);
    ///
    /// vprintf(
    ///     "int(%f + %f) = int(%f) = %d\n".as_ptr(),
    ///     transmute(&PrintArgs(a, b, a + b, (a + b) as i32)),
    /// );
    /// ```
    ///
    /// Sources:
    /// [Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#formatted-output),
    /// [PTX Interoperability](https://docs.nvidia.com/cuda/ptx-writers-guide-to-interoperability/index.html#system-calls).
    pub fn vprintf(format: *const u8, valist: *const c_void) -> i32;

    /// Allocate memory dynamically from a fixed-size heap in global memory.
    ///
    /// The CUDA in-kernel `malloc()` function allocates at least `size` bytes
    /// from the device heap and returns a pointer to the allocated memory
    /// or `NULL` if insufficient memory exists to fulfill the request.
    ///
    /// The returned pointer is guaranteed to be aligned to a 16-byte boundary.
    ///
    /// The memory allocated by a given CUDA thread via `malloc()` remains allocated
    /// for the lifetime of the CUDA context, or until it is explicitly released
    /// by a call to `free()`. It can be used by any other CUDA threads
    /// even from subsequent kernel launches.
    ///
    /// Sources:
    /// [Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#dynamic-global-memory-allocation-and-operations),
    /// [PTX Interoperability](https://docs.nvidia.com/cuda/ptx-writers-guide-to-interoperability/index.html#system-calls).
    // FIXME(denzp): assign `malloc` and `nothrow` attributes.
    pub fn malloc(size: usize) -> *mut c_void;

    /// Free previously dynamically allocated memory.
    ///
    /// The CUDA in-kernel `free()` function deallocates the memory pointed to by `ptr`,
    /// which must have been returned by a previous call to `malloc()`. If `ptr` is NULL,
    /// the call to `free()` is ignored.
    ///
    /// Any CUDA thread may free memory allocated by another thread, but care should be taken
    /// to ensure that the same pointer is not freed more than once. Repeated calls to `free()`
    /// with the same `ptr` has undefined behavior.
    ///
    /// Sources:
    /// [Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#dynamic-global-memory-allocation-and-operations),
    /// [PTX Interoperability](https://docs.nvidia.com/cuda/ptx-writers-guide-to-interoperability/index.html#system-calls).
    // FIXME(denzp): assign `nothrow` attribute.
    pub fn free(ptr: *mut c_void);

    // Internal declaration of the syscall. Exported variant has
    // the `char_size` parameter set to `1` (single char size in bytes).
    fn __assertfail(
        message: *const u8,
        file: *const u8,
        line: u32,
        function: *const u8,
        char_size: usize,
    );
}

/// Syscall to be used whenever the *assert expression produces a `false` value*.
///
/// Syscall arguments:
/// * `message`: The pointer to the string that should be output.
/// * `file`: The pointer to the file name string associated with the assert.
/// * `line`: The line number associated with the assert.
/// * `function`: The pointer to the function name string associated with the assert.
///
/// Source:
/// [PTX Interoperability](https://docs.nvidia.com/cuda/ptx-writers-guide-to-interoperability/index.html#system-calls).
#[inline]
pub unsafe fn __assert_fail(message: *const u8, file: *const u8, line: u32, function: *const u8) {
    __assertfail(message, file, line, function, 1)
}
