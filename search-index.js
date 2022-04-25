var searchIndex = JSON.parse('{\
"rust_cuda":{"doc":"","t":[14,14,14,0,0,0,14,14,0,0,16,8,16,3,3,3,24,16,8,8,11,11,11,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10,11,11,11,23,11,11,11,10,11,11,11,11,11,11,11,11,11,11,8,3,11,11,11,11,11,11,11,11,11,11,0,10,10,10,3,3,3,11,11,5,5,11,11,11,11,11,11,11,11,11,11,11,11,5,5,11,11,11,11,5,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,3,16,8,3,8,3,3,3,3,4,16,3,3,8,8,3,13,3,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,12,11,11,11,11,11,11,11,11,11,11,11,12,10,10,10,11,11,11,11,11,11,12,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,12,12,8,8,8,8,8,0,0,0,0,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,11,11,11,11,11,11,11,11,11,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,3,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["assert","assert_eq","assert_ne","common","device","host","print","println","safety","utils","CudaAllocation","CudaAsRust","CudaRepresentation","DeviceAccessible","DeviceConstRef","DeviceMutRef","LendRustToCuda","RustRepresentation","RustToCuda","RustToCudaProxy","as_mut","as_ref","as_ref","as_rust","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","fmt","from","from","from","from","from","from_mut","from_ref","into","into","into","into","kernel","populate_graph","populate_graph","populate_graph","restore","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","BorrowFromRust","ShallowCopy","borrow","borrow_mut","deref","deref_mut","fmt","from","into","try_from","try_into","type_id","utils","with_borrow_from_rust","with_borrow_from_rust_mut","with_moved_from_rust","Dim3","Idx3","PTXAllocator","alloc","as_id","block_dim","block_idx","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","dealloc","fmt","fmt","from","from","from","grid_dim","index","into","into","into","size","thread_idx","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","x","x","y","y","z","z","Cached","CombinedCudaAlloc","CompilationWatcher","CudaAlloc","CudaDropWrapper","EmptyCudaAlloc","HostAndDeviceConstRef","HostAndDeviceMutRef","HostAndDeviceOwned","HostDeviceBox","KernelJITResult","KernelTraitObject","LaunchConfig","LaunchPackage","Launcher","LendToCuda","NullCudaAlloc","Recompiled","TypedKernel","as_mut","as_ref","as_ref","block","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","compile_with_ptx_jit_args","config","copy_from","copy_to","deref","deref_mut","drop","drop","eq","fmt","for_device","for_device","for_device","for_host","for_host","for_host","from","from","from","from","from","from","from","from","from","from","from","from","from","from","get_launch_package","grid","into","into","into","into","into","into","into","into","into","into","into","kernel","lend_to_cuda","lend_to_cuda_mut","move_to_cuda","ne","new","new","new","new","on_compile","shared_memory_size","split","stream","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","watcher","with_new","with_new","with_new","0","0","FitsIntoDeviceRegister","NoAliasing","SafeDeviceCopy","StackOnly","UnifiedHeapOnly","aliasing","alloc","device_copy","exchange","SplitSliceOverCudaThreadsConstStride","SplitSliceOverCudaThreadsDynamicStride","as_mut","as_mut","as_ref","as_ref","as_rust","as_rust","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","deref","deref","deref_mut","deref_mut","from","from","into","into","lend_to_cuda","lend_to_cuda","lend_to_cuda_mut","lend_to_cuda_mut","move_to_cuda","move_to_cuda","new","new","populate_graph","populate_graph","restore","restore","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","with_borrow_from_rust","with_borrow_from_rust","with_borrow_from_rust_mut","with_borrow_from_rust_mut","with_moved_from_rust","with_moved_from_rust","UnifiedAllocator","allocate","borrow","borrow_mut","deallocate","from","into","try_from","try_into","type_id","SafeDeviceCopyWrapper","as_rust","borrow","borrow","borrow_mut","clone","clone_into","fmt","from","from","from","from_mut","from_mut_slice","from_ref","from_slice","into","into_inner","into_mut","into_mut_slice","into_ref","into_slice","lend_to_cuda","lend_to_cuda_mut","move_to_cuda","populate_graph","restore","to_owned","try_from","try_into","type_id","with_borrow_from_rust","with_borrow_from_rust_mut","with_moved_from_rust","buffer","wrapper","CudaExchangeBuffer","CudaExchangeBufferDevice","CudaExchangeBufferHost","CudaExchangeItem","as_mut","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","deref","deref","deref_mut","deref_mut","from","from","from","from_vec","into","into","into","lend_to_cuda","lend_to_cuda_mut","move_to_cuda","new","populate_graph","read","read","restore","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","with_borrow_from_rust","with_borrow_from_rust_mut","with_moved_from_rust","write","write","ExchangeWrapperOnDevice","ExchangeWrapperOnHost","as_mut","as_ref","borrow","borrow","borrow_mut","borrow_mut","deref","deref_mut","from","from","into","into","move_to_device","move_to_host","new","try_from","try_from","try_into","try_into","type_id","type_id"],"q":["rust_cuda","","","","","","","","","","rust_cuda::common","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::device","","","","","","","","","","","","","","","","rust_cuda::device::utils","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::host","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::host::KernelJITResult","","rust_cuda::safety","","","","","rust_cuda::utils","","","","rust_cuda::utils::aliasing","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::utils::alloc","","","","","","","","","","rust_cuda::utils::device_copy","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::utils::exchange","","rust_cuda::utils::exchange::buffer","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda::utils::exchange::wrapper","","","","","","","","","","","","","","","","","","","","","",""],"d":["Assertion in GPU kernel for one expression is true.","Assertion in GPU kernel for two expressions are equal.","Assertion in GPU kernel for two expressions are not equal.","","","","Alternative of <code>std::print!</code> using CUDA <code>vprintf</code> system-call","Alternative of <code>std::println!</code> using CUDA <code>vprintf</code> system-call","","","","Safety","","","","","","","Safety","","","","","Safety","Errors","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","Errors","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","Safety","Safety","Safety","Dimension specified in kernel launching","Indices that the kernel code is running on","Memory allocator using CUDA malloc/free","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Errors","","Errors","Errors","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Lends an immutable copy of <code>&amp;self</code> to CUDA:","Lends a mutable copy of <code>&amp;mut self</code> to CUDA:","Moves <code>self</code> to CUDA iff <code>self</code> is <code>SafeDeviceCopy</code>","","Errors","","Safety","Safety","Errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Errors","Errors","Errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","Returns the argument unchanged.","","","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","When the <code>host</code> feature is <strong>not</strong> set, <code>CudaExchangeBuffer</code> …","When the <code>host</code> feature is set, <code>CudaExchangeBuffer</code> refers to …","When the <code>host</code> feature is <strong>not</strong> set, <code>CudaExchangeBuffer</code> …","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Errors","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Errors","Errors","Errors","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,2,0,0,3,4,3,2,1,5,4,3,5,4,3,4,4,5,5,5,5,4,3,6,6,6,5,4,3,0,5,4,3,1,4,5,4,3,5,4,3,5,4,3,0,0,7,7,7,7,7,7,7,7,7,7,0,8,8,8,0,0,0,9,10,0,0,9,11,10,9,11,10,9,11,10,9,11,10,0,0,9,11,10,11,0,9,11,10,9,11,10,9,11,10,11,10,11,10,11,10,12,0,13,0,0,0,0,0,0,0,0,13,0,0,0,0,0,12,0,14,14,15,16,17,12,18,19,20,21,22,14,15,23,16,17,12,18,19,20,21,22,14,15,23,16,15,16,15,16,18,17,22,22,21,21,21,22,16,16,14,15,23,14,15,23,17,12,18,19,20,21,21,21,22,22,14,15,23,16,13,16,17,12,18,19,20,21,22,14,15,23,16,17,24,24,24,16,18,20,14,15,13,16,20,17,15,16,17,12,18,19,20,21,22,14,15,23,16,17,12,18,19,20,21,22,14,15,23,16,17,12,18,19,20,21,22,14,15,23,16,17,14,15,23,25,26,0,0,0,0,0,0,0,0,0,0,0,27,28,27,28,27,28,27,27,27,28,28,28,27,27,28,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,27,28,0,29,29,29,29,29,29,29,29,29,0,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,0,0,0,0,0,0,31,32,33,33,31,32,33,31,31,31,32,33,32,33,32,33,31,33,32,33,31,33,33,33,33,31,31,31,33,31,32,33,31,32,33,31,32,33,31,33,33,33,31,31,0,0,34,34,35,34,35,34,35,35,35,34,35,34,35,34,35,35,34,35,34,35,34],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["deviceaccessible",3]]],[[["",0],["cudaalloc",8]],["cudaresult",6]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["deviceconstref",3]],[[["",0],["",0]]],[[["",0],["formatter",3]],["result",6]],[[["",0]]],[[]],[[]],[[]],[[]],[[["",0]],["",0]],[[["",0]],["",0]],[[]],[[]],[[]],[[]],null,[[["typelayoutgraph",3]]],[[["typelayoutgraph",3]]],[[["typelayoutgraph",3]]],[[["",0],["combinedcudaalloc",3,[["cudaalloc",8]]]],["cudaresult",6,[["cudaalloc",8]]]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0]]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],null,[[["deviceconstref",3,[["deviceaccessible",3]]],["fnonce",8]]],[[["devicemutref",3,[["deviceaccessible",3]]],["fnonce",8]]],[[["devicemutref",3,[["deviceaccessible",3]]],["fnonce",8]]],null,null,null,[[["",0],["layout",3]]],[[["",0],["dim3",3]],["usize",0]],[[],["dim3",3]],[[],["idx3",3]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0],["layout",3]]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[],["dim3",3]],[[],["usize",0]],[[]],[[]],[[]],[[["",0]],["usize",0]],[[],["idx3",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["hostanddevicemutref",3]],[[["",0]],["hostanddeviceconstref",3]],[[["",0]],["hostanddeviceconstref",3]],null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0]],["launchconfig",3]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["option",4]],["cudaresult",6,[["kerneljitresult",4]]]],null,[[["",0],["",0]],["cudaresult",6]],[[["",0],["",0]],["cudaresult",6]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0],["launchconfig",3]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[["",0]],["devicemutref",3]],[[["",0]],["deviceconstref",3]],[[],["devicemutref",3]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[]],[[]],[[]],[[]],[[]],[[]],[[["never",0]]],[[]],[[["devicebox",3]]],[[]],[[]],[[]],[[]],[[]],[[["",0]],["launchpackage",3]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[["",0],["fnonce",8]],["result",4,[["from",8,[["cudaerror",4]]]]]],[[["",0],["fnonce",8]],["result",4,[["from",8,[["cudaerror",4]]]]]],[[["fnonce",8]],["result",4,[["from",8,[["cudaerror",4]]]]]],[[["",0],["launchconfig",3]],["bool",0]],[[["str",0],["str",0]],["cudaresult",6]],[[]],[[["hostdevicebox",3],["",0]]],[[["hostdevicebox",3],["",0]]],[[["function",3]],["cudaresult",6]],null,[[]],null,[[["",0]]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,[[["",0],["fnonce",8]],["result",4,[["from",8,[["cudaerror",4]]]]]],[[["",0],["fnonce",8]],["result",4,[["from",8,[["cudaerror",4]]]]]],[[["fnonce",8]],["result",4,[["from",8,[["cudaerror",4]]]]]],null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["deviceaccessible",3]]],[[["deviceaccessible",3]]],[[["",0],["cudaalloc",8]],["cudaresult",6]],[[["",0]]],[[["",0]],["",0]],[[["",0],["cudaalloc",8]],["cudaresult",6]],[[["",0]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0]],["",0]],[[["",0]]],[[["",0]],["splitsliceovercudathreadsconststride",3]],[[["",0]],["splitsliceovercudathreadsdynamicstride",3]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[]],[[]],[[]],[[]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[],["result",4]],[[],["result",4]],[[]],[[["usize",0]]],[[["typelayoutgraph",3]]],[[["typelayoutgraph",3]]],[[["",0],["combinedcudaalloc",3,[["cudaalloc",8]]]],["cudaresult",6,[["cudaalloc",8]]]],[[["",0],["combinedcudaalloc",3,[["cudaalloc",8]]]],["cudaresult",6,[["cudaalloc",8]]]],[[["",0]]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["deviceconstref",3,[["deviceaccessible",3]]]]],[[["deviceconstref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],null,[[["",0],["layout",3]],["result",4,[["nonnull",3],["allocerror",3]]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0],["nonnull",3,[["u8",0]]],["layout",3]]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],null,[[["deviceaccessible",3]]],[[["",0],["cudaalloc",8]],["cudaresult",6]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["safedevicecopywrapper",3]],[[["",0],["",0]]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[["never",0]]],[[["",0]],["",0]],[[]],[[["",0]],["",0]],[[]],[[]],[[]],[[["",0]],["",0]],[[]],[[["",0]],["",0]],[[]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[],["result",4]],[[["typelayoutgraph",3]]],[[["",0],["combinedcudaalloc",3,[["cudaalloc",8]]]],["cudaresult",6,[["cudaalloc",8]]]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["deviceconstref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0],["cudaalloc",8]],["cudaresult",6]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["cudaexchangeitem",3]],[[["",0],["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[]],[[]],[[]],[[["vec",3]],["cudaresult",6]],[[]],[[]],[[]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[],["result",4]],[[["",0],["usize",0]],["cudaresult",6]],[[["typelayoutgraph",3]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0],["combinedcudaalloc",3,[["cudaalloc",8]]]],["cudaresult",6,[["cudaalloc",8]]]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["deviceconstref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],[[["devicemutref",3,[["deviceaccessible",3]]]]],[[["",0]]],[[["",0]]],null,null,[[["",0]],["hostanddevicemutref",3,[["deviceaccessible",3]]]],[[["",0]],["hostanddeviceconstref",3,[["deviceaccessible",3]]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0]]],[[]],[[]],[[]],[[]],[[],["cudaresult",6,[["exchangewrapperondevice",3]]]],[[],["cudaresult",6,[["exchangewrapperonhost",3]]]],[[],["cudaresult",6]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]]],"p":[[8,"RustToCuda"],[8,"CudaAsRust"],[3,"DeviceMutRef"],[3,"DeviceConstRef"],[3,"DeviceAccessible"],[8,"RustToCudaProxy"],[3,"ShallowCopy"],[8,"BorrowFromRust"],[3,"PTXAllocator"],[3,"Idx3"],[3,"Dim3"],[4,"KernelJITResult"],[8,"Launcher"],[3,"HostAndDeviceMutRef"],[3,"HostAndDeviceConstRef"],[3,"LaunchConfig"],[3,"LaunchPackage"],[3,"TypedKernel"],[3,"NullCudaAlloc"],[3,"CombinedCudaAlloc"],[3,"CudaDropWrapper"],[3,"HostDeviceBox"],[3,"HostAndDeviceOwned"],[8,"LendToCuda"],[13,"Cached"],[13,"Recompiled"],[3,"SplitSliceOverCudaThreadsConstStride"],[3,"SplitSliceOverCudaThreadsDynamicStride"],[3,"UnifiedAllocator"],[3,"SafeDeviceCopyWrapper"],[3,"CudaExchangeItem"],[3,"CudaExchangeBufferDevice"],[3,"CudaExchangeBuffer"],[3,"ExchangeWrapperOnDevice"],[3,"ExchangeWrapperOnHost"]]},\
"rust_cuda_derive":{"doc":"","t":[24,23],"n":["LendRustToCuda","kernel"],"q":["rust_cuda_derive",""],"d":["",""],"i":[0,0],"f":[null,null],"p":[]},\
"rust_cuda_ptx_jit":{"doc":"","t":[13,3,3,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12],"n":["Cached","CudaKernel","PtxJITCompiler","PtxJITResult","Recomputed","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","drop","from","from","from","get_function","into","into","into","new","new","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","with_arguments","0","0"],"q":["rust_cuda_ptx_jit","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rust_cuda_ptx_jit::PtxJITResult",""],"d":["","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Errors","","","","","","","","","","","",""],"i":[1,0,0,0,1,2,1,3,2,1,3,3,2,1,3,3,2,1,3,2,3,2,1,3,2,1,3,2,1,3,2,4,5],"f":[null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[]],[[]],[[]],[[["",0]],["function",3]],[[]],[[]],[[]],[[["cstr",6]]],[[["cstr",6],["cstr",6]],["cudaresult",6]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0],["option",4]],["ptxjitresult",4]],null,null],"p":[[4,"PtxJITResult"],[3,"PtxJITCompiler"],[3,"CudaKernel"],[13,"Cached"],[13,"Recomputed"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};