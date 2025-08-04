import DurationSkeleton from "./DurationSkeleton";
import PlatformsSkeleton from "./PlatformsSkeleton";
import UserInputSkeleton from "./UserInputSkeleton";
import ProductsWrapperSkeleton from "./ProductsWrapperSkeleton";

const ToolsSkeleton = () => {
    return (

        <div className="toolsContainer mr-0 lg:mr-3 p-4 xsm:p-8 w-[400px] bg-gray-100 rounded-lg shadow-md max-w-3xl min-h-[394px]">
            <DurationSkeleton />
            <PlatformsSkeleton />
            <div className="mb-6 pr-2">
             <UserInputSkeleton/>
            </div>
            <ProductsWrapperSkeleton/>

        </div>

    );
};

export default ToolsSkeleton;