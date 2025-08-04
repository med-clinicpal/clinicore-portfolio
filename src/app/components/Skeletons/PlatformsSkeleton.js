const PlatformsSkeleton = () => {
    return (
<div className="mb-6 h-[68.4px]">
  <label htmlFor="select-platform" className="text-sm xsm:text-base block font-semibold text-gray-700 mb-1 flex items-center">
    <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
    <span className="ml-2">
      <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
    </span>
  </label>
  <div className="w-full cursor-pointer p-2 rounded-md border border-gray-300 bg-gray-300 animate-pulse">
    <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse"></div>
  </div>
</div>


    );
};

export default PlatformsSkeleton;