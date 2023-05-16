import Skeleton from "react-loading-skeleton";

const RootLoading = () => {
  return (
    <section
      className={`flex  flex-col lg:flex-row md:flex-row sm:flex-col justify-center py-10 min-h-screen bg-white gap-4 `}
    >
      <div className={` w-full px-4 md:w-[65%]`}>
        <h1 className="text-[24px] font-semibold mb-5">
          <Skeleton className="w-[30%]" width={"30%"} inline={true} />
        </h1>
        <div className="ml-0 w-full">
          <div>
            <div>
              <div
                className={`relative text-start shadow-sm grid w-full h-80 items-end overflow-hidden justify-start`}
              >
                <div
                  className={`absolute inset-0 m-0 h-full w-full rounded-none `}
                >
                  <Skeleton className="h-full w-full" />
                </div>
                <div className="relative lg:w-[55vw] md:w-[50vw] sm:w-[48vw] ">
                  <div className="mb-6 max-w-[100%] font-semibold leading-[1.5]">
                    <Skeleton className="lg:w-[55vw] md:w-[50vw] sm:w-[48vw]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-14  w-full">
          <div className="flex gap-5">
            <Skeleton containerClassName="flex-1" className="w-full h-48" />
            <Skeleton containerClassName="flex-1" className="w-full h-48" />
          </div>

          <div className="w-full px-0 md:px-2 py-4  ">
            <Skeleton
              count={10}
              height={"2em"}
              borderRadius={"0.8rem"}
              className="my-2"
            />
          </div>
        </div>
      </div>

      <div className="w-full p-8">
        <div className="m-0 mb-8 text-center">
          <div className="font-normal uppercase">
            <Skeleton className="" />
          </div>
          <div className="mt-6  justify-center gap-1 text-7xl font-normal">
            <div className="mt-2 text-4xl">
              <Skeleton className="" />
            </div>
            <div className="self-end text-4xl">
              <Skeleton className="" />
            </div>
          </div>
        </div>
        <div className="p-0">
          <ul className=" -col gap-4">
            <li className=" items-center gap-4">
              <div className="rounded-full border border-white/20 bg-white/20 p-1">
                <Skeleton className="" />
              </div>
              <div className="font-normal text-white">
                <Skeleton className="" />
              </div>
            </li>
            <li className=" items-center gap-4">
              <div className="rounded-full border border-white/20 bg-white/20 p-1">
                <Skeleton className="" />
              </div>
              <div className="font-normal text-white">
                <Skeleton className="" />
              </div>
            </li>
            <li className=" items-center gap-4">
              <div className="rounded-full border border-white/20 bg-white/20 p-1">
                <Skeleton className="" />
              </div>
              <div className="font-normal text-white">
                <Skeleton className="" />
              </div>
            </li>
            <li className=" items-center gap-4">
              <div className="rounded-full border border-white/20 bg-white/20 p-1">
                <Skeleton className="" />
              </div>
              <div className="font-normal text-white">
                <Skeleton className="" />
              </div>
            </li>
            <li className=" items-center gap-4">
              <div className="rounded-full border border-white/20 bg-white/20 p-1">
                <Skeleton className="" />
              </div>
              <div className="font-normal  text-white">
                <Skeleton className="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-12 p-0"></div>
      </div>
    </section>
  );
};

export default RootLoading;
