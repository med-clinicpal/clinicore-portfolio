const UserInputSkeleton = () => {
    return (
        
        <div className=" mb-2 h-[52px]">
            {/* Label and User Count */}
            <div className="flex items-center mb-2">
            <div className="w-1/3 h-5 bg-gray-200 rounded animate-pulse"></div>
            <div className="ml-2 w-[25px] h-5 bg-gray-200 rounded animate-pulse"></div>
            <div className="ml-2 w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>

            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        
       


    );
};

export default UserInputSkeleton;