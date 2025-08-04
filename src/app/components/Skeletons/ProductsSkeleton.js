const ProductsSkeleton = () => {
    return (
        <div >
            {[...Array(7)].map((_, index) => (
                <div
                    key={index}
                    className="h-14 bg-gray-300 rounded-lg shadow animate-pulse mb-4"
                >
                    <div className="h-full p-4">
                        <div className="h-4 w-1/3 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsSkeleton;