const ProductsWrapperSkeleton = () => {
    return (
        <>
            <div className="mb-2 ">
                <h2 className="text-sm xsm:text-base block font-semibold text-gray-700 mb-1 flex items-center">
                    <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
                    <span className="ml-2">
                        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                    </span>
                </h2>
            </div>

            <div className="p-2 max-h-10 flex items-center">
                <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
        </>
    );
};

export default ProductsWrapperSkeleton;