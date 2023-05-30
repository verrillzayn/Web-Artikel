import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  // <Skeleton containerClassName="flex-1" />;
  return (
    <div className="bg-gray-300 ">
      <div className="flex">
        <div className="p-0 md:px-5 md:py-6 flex flex-col flex-grow w-screen md:w-full min-h-screen">
          <Skeleton containerClassName="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
