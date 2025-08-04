const NavSkeleton = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row p-2 lg:p-2 bg-gray-200 rounded-lg mx-auto items-center justify-between animate-pulse h-[88px]">
            <div className="w-full lg:w-1/3 h-[64px] bg-gray-300 rounded"></div>
            <div className="w-full lg:w-1/3 h-[64px] bg-gray-300 rounded mt-2 lg:mt-0"></div>
            <div className="w-full lg:w-1/3 h-[64px] bg-gray-300 rounded mt-2 lg:mt-0"></div>
        </div>
    );
};

export default NavSkeleton;
