var searchIndex = JSON.parse('{\
"rust_cuda":{"doc":"","t":[14,14,14,0,0,0,14,14,0,16,8,16,3,3,3,4,24,13,16,8,24,13,11,11,11,11,11,10,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,23,11,11,11,11,11,11,11,11,11,11,11,11,11,10,12,3,3,8,11,11,11,11,11,11,11,11,11,11,0,23,14,11,11,11,11,11,11,0,10,10,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3,3,3,11,11,5,5,11,11,11,11,11,11,11,11,11,11,11,11,5,5,11,11,11,11,5,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,3,8,3,8,3,3,16,3,8,8,3,3,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10,12,11,11,11,11,11,11,11,10,10,14,11,11,11,11,11,12,14,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,8,3,11,11,11,11,11,11,11,11,11,11,11,11],"n":["assert","assert_eq","assert_ne","common","device","host","print","println","utils","CudaAllocation","CudaAsRust","CudaRepresentation","DeviceBoxConst","DeviceBoxMut","DeviceOwnedSlice","FFIsafeOption","LendRustBorrowToCuda","None","RustRepresentation","RustToCuda","RustToCudaAsRust","Some","as_mut","as_mut","as_ref","as_ref","as_ref","as_rust","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","fmt","fmt","from","from","from","from","from","from","from","into","into","into","into","kernel","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","un_borrow_mut","0","AnyDeviceBoxConst","AnyDeviceBoxMut","BorrowFromRust","borrow","borrow","borrow_mut","borrow_mut","from","from","into","into","into","into","nvptx","specialise_kernel_entry","specialise_kernel_type","try_from","try_from","try_into","try_into","type_id","type_id","utils","with_borrow_from_rust","with_borrow_from_rust_mut","__assert_fail","_block_dim_x","_block_dim_y","_block_dim_z","_block_idx_x","_block_idx_y","_block_idx_z","_cos","_exp","_grid_dim_x","_grid_dim_y","_grid_dim_z","_log","_log2","_round","_sin","_syncthreads","_thread_idx_x","_thread_idx_y","_thread_idx_z","free","malloc","trap","vprintf","Dim3","Idx3","PTXAllocator","alloc","as_id","block_dim","block_idx","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","dealloc","fmt","fmt","from","from","from","grid_dim","index","into","into","into","size","thread_idx","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","x","x","y","y","z","z","CombinedCudaAlloc","CudaAlloc","CudaDropWrapper","EmptyCudaAlloc","HostDeviceBoxConst","HostDeviceBoxMut","KernelTraitObject","LaunchConfig","Launcher","LendToCuda","NullCudaAlloc","TypedKernel","block","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","deref","deref_mut","drop","eq","fmt","for_device","for_device","for_host","for_host","from","from","from","from","from","from","from","from","from","get_config","get_kernel_mut","get_stream","grid","into","into","into","into","into","into","into","lend_to_cuda","lend_to_cuda_mut","link_kernel","ne","new","new","new","on_compile","shared_memory_size","specialise_kernel_call","split","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","exchange","stack","buffer","wrapper","CudaExchangeBuffer","CudaExchangeBufferDevice","CudaExchangeBufferHost","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","deref","deref","deref_mut","deref_mut","from","from","from_vec","into","into","new","try_from","try_from","try_into","try_into","type_id","type_id","un_borrow_mut","ExchangeWithCudaWrapper","ExchangeWithHostWrapper","as_mut","as_ref","borrow","borrow","borrow_mut","borrow_mut","deref","deref_mut","from","from","into","into","move_to_cuda","move_to_host","new","try_from","try_from","try_into","try_into","type_id","type_id","StackOnly","StackOnlyDeviceCopy","borrow","borrow_mut","deref","deref_mut","from","from","from","into","into_inner","try_from","try_into","type_id"],"q":["rust_cuda","","","","","","","","","rust_cuda::common","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::common::FFIsafeOption","rust_cuda::device","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::device::nvptx","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::device::utils","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::host","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::utils","","rust_cuda::utils::exchange","","rust_cuda::utils::exchange::buffer","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::utils::exchange::wrapper","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::utils::stack","","","","","","","","","","","","",""],"d":["Assertion in GPU kernel for one expression is true.","Assertion in GPU kernel for two expressions are equal.","Assertion in GPU kernel for two expressions are not equal.","","","","Alternative of std::print! using CUDA <code>vprintf</code> system-call","Alternative of std::println! using CUDA <code>vprintf</code> …","","","Safety","","","","","","","","","Safety","","","","","","","","Safety","Errors","","","","","Errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Errors","","","","Safety","","","","","","","Safety","","Safety","","NVPTX intrinsics (experimental)","","","","","","","","","Support crate for writting GPU kernel in Rust (accel-core)","Safety","Safety","Syscall to be used whenever the <em>assert expression …","x-th thread-block dimension.","y-th thread-block dimension.","z-th thread-block dimension.","x-th thread-block index.","y-th thread-block index.","z-th thread-block index.","Find the cosine of a value.","Calculate the base e exponential of the input argument x.","x-th block-grid dimension.","y-th block-grid dimension.","z-th block-grid dimension.","Calculate the base e logarithm of the input argument x.","Calculate the base 2 logarithm of the input argument x.","Find the nearest integer to a value. Round half-way cases …","Find the sine of a value.","Synchronizes all threads in the block.","x-th thread index.","y-th thread index.","z-th thread index.","Free previously dynamically allocated memory.","Allocate memory dynamically from a fixed-size heap in …","Generates the trap instruction <code>TRAP</code>","Print formatted output from a kernel to a host-side …","Dimension specified in kernel launching","Indices where the kernel code running on","Memory allocator using CUDA malloc/free","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Safety","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Lends an immutable copy of <code>&amp;self</code> to CUDA:","Lends a mutable copy of <code>&amp;mut self</code> to CUDA:","","","","","","Errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Errors","","","Errors","","","","","","","","","","","","","","","","","","","","","","Errors","Errors","Errors","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,2,3,0,0,2,4,5,4,5,6,3,1,4,5,2,6,1,4,5,2,6,6,6,5,2,4,4,5,5,2,6,6,4,5,2,6,0,6,4,5,2,6,4,5,2,6,4,5,2,6,1,7,0,0,0,8,9,8,9,8,9,8,8,9,9,0,0,0,8,9,8,9,8,9,0,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,11,13,12,11,13,12,11,13,12,11,13,12,0,0,11,13,12,13,0,11,13,12,11,13,12,11,13,12,13,12,13,12,13,12,0,0,0,0,0,0,14,0,0,0,0,0,15,16,17,18,19,20,21,15,16,17,18,19,20,21,15,15,15,19,19,19,15,15,20,21,20,21,16,17,18,19,19,19,20,21,15,14,14,14,15,16,17,18,19,20,21,15,22,22,0,15,18,20,21,14,15,0,18,15,16,17,18,19,20,21,15,16,17,18,19,20,21,15,16,17,18,19,20,21,15,0,0,0,0,0,0,0,23,24,23,24,24,23,24,23,24,23,24,24,23,24,24,23,24,23,24,23,24,24,0,0,25,25,26,25,26,25,26,26,26,25,26,25,26,25,26,26,25,26,25,26,25,0,0,27,27,27,27,27,27,27,27,27,27,27,27],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[["cudaalloc",8]],["cudaresult",6]],[[]],[[]],[[]],[[]],[[["cudaalloc",8]],["cudaresult",6]],[[]],[[]],[[]],[[]],[[],["deviceboxconst",3]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["devicebox",3]]],[[]],[[["devicebuffer",3]]],[[]],[[]],[[]],[[["devicebox",3]]],[[]],[[]],[[]],[[]],null,[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[["cudaalloc",8],["combinedcudaalloc",3]],[["cudaalloc",8],["cudaresult",6]]],null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],[["devicecopy",8],["deviceboxconst",3],["sized",8]]],[[]],[[],[["devicecopy",8],["deviceboxmut",3],["sized",8]]],[[]],null,null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,[[["deviceboxconst",3],["fnonce",8]]],[[["deviceboxmut",3],["fnonce",8]]],[[["u32",15]]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[["f64",15]],["f64",15]],[[["f64",15]],["f64",15]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[["f64",15]],["f64",15]],[[["f64",15]],["f64",15]],[[["f64",15]],["f64",15]],[[["f64",15]],["f64",15]],[[]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],null,null,[[]],null,null,null,null,[[["layout",3]]],[[["dim3",3]],["u32",15]],[[],["dim3",3]],[[],["idx3",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[["layout",3]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[],["dim3",3]],[[],["usize",15]],[[]],[[]],[[]],[[],["u32",15]],[[],["idx3",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["launchconfig",3]],[[]],[[]],[[]],[[]],[[["launchconfig",3]],["bool",15]],[[["formatter",3]],["result",6]],[[],["deviceboxmut",3]],[[],["deviceboxconst",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["launchconfig",3]],[[],["typedkernel",3]],[[],["stream",3]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["fnonce",8]],["cudaresult",6]],[[["fnonce",8]],["cudaresult",6]],null,[[["launchconfig",3]],["bool",15]],[[]],[[["devicebox",3]]],[[["devicebox",3]]],[[["function",3]],["cudaresult",6]],null,null,[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[["cudaalloc",8]],["cudaresult",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["vec",3]],["cudaresult",6]],[[]],[[]],[[["usize",15]],["cudaresult",6]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[["cudaalloc",8],["combinedcudaalloc",3]],[["cudaalloc",8],["cudaresult",6]]],null,null,[[],["hostdeviceboxmut",3]],[[],["hostdeviceboxconst",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[["exchangewithhostwrapper",3],["cudaresult",6,["exchangewithhostwrapper"]]]],[[],[["exchangewithcudawrapper",3],["cudaresult",6,["exchangewithcudawrapper"]]]],[[],["cudaresult",6]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[8,"RustToCuda"],[4,"FFIsafeOption"],[8,"CudaAsRust"],[3,"DeviceBoxMut"],[3,"DeviceOwnedSlice"],[3,"DeviceBoxConst"],[13,"Some"],[3,"AnyDeviceBoxConst"],[3,"AnyDeviceBoxMut"],[8,"BorrowFromRust"],[3,"PTXAllocator"],[3,"Idx3"],[3,"Dim3"],[8,"Launcher"],[3,"LaunchConfig"],[3,"TypedKernel"],[3,"NullCudaAlloc"],[3,"CombinedCudaAlloc"],[3,"CudaDropWrapper"],[3,"HostDeviceBoxMut"],[3,"HostDeviceBoxConst"],[8,"LendToCuda"],[3,"CudaExchangeBufferDevice"],[3,"CudaExchangeBuffer"],[3,"ExchangeWithHostWrapper"],[3,"ExchangeWithCudaWrapper"],[3,"StackOnlyDeviceCopy"]]},\
"rust_cuda_derive":{"doc":"","t":[24,24,23,14,14,23,14],"n":["LendRustBorrowToCuda","RustToCudaAsRust","kernel","link_kernel","specialise_kernel_call","specialise_kernel_entry","specialise_kernel_type"],"q":["rust_cuda_derive","","","","","",""],"d":["","","","","","",""],"i":[0,0,0,0,0,0,0],"f":[null,null,null,null,null,null,null],"p":[]},\
"rust_cuda_ptx_jit":{"doc":"","t":[14,14,0,0,0,13,3,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,3,11,11,11,11,11,11,11,11,11,11],"n":["PtxJITConstLoad","compilePtxJITwithArguments","host","compiler","kernel","Cached","PtxJITCompiler","PtxJITResult","Recomputed","borrow","borrow","borrow_mut","borrow_mut","from","from","into","into","new","try_from","try_from","try_into","try_into","type_id","type_id","with_arguments","0","0","CudaKernel","borrow","borrow_mut","drop","from","get_function","into","new","try_from","try_into","type_id"],"q":["rust_cuda_ptx_jit","","","rust_cuda_ptx_jit::host","","rust_cuda_ptx_jit::host::compiler","","","","","","","","","","","","","","","","","","","","rust_cuda_ptx_jit::host::compiler::PtxJITResult","","rust_cuda_ptx_jit::host::kernel","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Errors","","",""],"i":[0,0,0,0,0,1,0,0,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,3,4,0,5,5,5,5,5,5,5,5,5,5],"f":[null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["cstr",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[["option",4]],["ptxjitresult",4]],null,null,null,[[]],[[]],[[]],[[]],[[],["function",3]],[[]],[[["cstr",3]],["cudaresult",6]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[4,"PtxJITResult"],[3,"PtxJITCompiler"],[13,"Cached"],[13,"Recomputed"],[3,"CudaKernel"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};