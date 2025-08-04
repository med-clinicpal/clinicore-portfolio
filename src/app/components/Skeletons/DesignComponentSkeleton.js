const ComponentSkeleton = () => {
    return (
      <div className="mt-4 lg:mt-0 flex-1 lg:mx-auto p-3 space-y-3 bg-white rounded-lg shadow-sm h-[690.4px] md:h-[710px]">
        {/* Header Skeleton */}
        <div className="bg-gray-300 p-2 rounded-sm animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-12 bg-gray-400 rounded animate-pulse"></div>
              <div>
                <div className="w-32 h-4 bg-gray-400 rounded animate-pulse"></div>
                <div className="w-48 h-5 bg-gray-500 rounded mt-1 animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-20 h-5 bg-gray-500 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
  
        {/* Packages Grid Skeleton */}
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="p-2 rounded-lg border bg-gray-200 border-gray-300 animate-pulse h-[140px]"
            >
              <div className="space-y-2">
                {/* Package Header Skeleton */}
                <div className="flex items-center justify-between">
                  <div className="w-32 h-5 bg-gray-400 rounded animate-pulse"></div>
                  <div className="w-20 h-5 bg-gray-500 rounded animate-pulse"></div>
                </div>
                <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
  
                {/* Addons Skeleton */}
                <div className="grid grid-cols-1 gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <div className="w-4 h-4 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-32 h-4 bg-gray-400 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ComponentSkeleton;
  