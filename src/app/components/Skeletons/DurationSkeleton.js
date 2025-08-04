const DurationSkeleton = () => {
    return (
<div className="mb-6 h-[65.6px]">
  <label htmlFor="service-type" className="text-sm xsm:text-base block font-semibold text-gray-700 xxsm:whitespace-nowrap mb-2 flex items-center">
    <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
    <span className="ml-2">
      <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
    </span>
  </label>
  <div className="flex gap-4">
    <button
      id="license-only"
      name="serviceType"
      className="w-32 h-10 bg-gray-300 rounded-sm text-transparent animate-pulse"
    ></button>
    <button
      id="fully-managed"
      name="serviceType"
      className="w-32 h-10 bg-gray-300 rounded-sm text-transparent animate-pulse"
    ></button>
  </div>
</div>

    );
};

export default DurationSkeleton;