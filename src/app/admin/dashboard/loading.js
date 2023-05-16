import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  // <Skeleton containerClassName="flex-1" />;
  return (
    <div className="bg-gray-300 ">
      <div className="flex">
        <div className=" bg-white w-[250px]  fixed md:static top-0 bottom-0 left-0 z-40">
          <div className="flex flex-col py-8 px-3">
            <div
              className={`flex gap-1 text-md pl-6 py-3 border-b-[1px] border-b-white/10  hover:cursor-pointer rounded-2xl`}
            >
              <div className="text-xl w-[85%]">
                <SkeletonTheme height={"2rem"}>
                  <Skeleton count={3} className="mb-6" />
                </SkeletonTheme>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 md:px-5 md:py-6 flex flex-col flex-grow w-screen md:w-full min-h-screen">
          {/* {children === "Dashboard" ? <DashboardHome /> : <></>} */}
          <Skeleton containerClassName="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
