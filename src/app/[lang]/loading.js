import ToolsSkeleton from "../components/Skeletons/ToolsSkeleton";
import NavSkeleton from "../components/Skeletons/NavSkeleton";
import DesignComponentSkeleton from "../components/Skeletons/DesignComponentSkeleton"
export default function Loading() {
  return (
    <div className='w-[98%] min-h-[100vh]  p-0 mx-auto xsm:w-[400px] lg:w-full lg:p-4'>
      <NavSkeleton />
      <div className="w-[98%] mx-auto p-0 md:w-auto mt-4 flex flex-col lg:flex-row flex-wrap justify-start items-start bg-[#042841] flex-wrap">
        <ToolsSkeleton />
        <DesignComponentSkeleton />
      </div>
    </div>
  );
}
