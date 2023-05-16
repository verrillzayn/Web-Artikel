import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingAdminArtikel = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

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
          <div className=" lg:p-4 p-2 md:p-4 rounded-xl bg-white">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  <Skeleton width={"20%"} />
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="ID"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ID
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      title
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Category
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="summary"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Summary
                    </label>
                    <div className="mt-2">
                      <Skeleton width={"80%"} height={"2rem"} />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="slug"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Slug
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>
                </div>

                <div className="py-4 md:py-8">
                  <h2 className="text-base mb-8 font-semibold leading-7 text-gray-900">
                    SEO
                  </h2>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="metaTitle"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Meta Title
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="metaDescription"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Meta description
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>
                </div>

                <div className="py-4 md:py-8">
                  <h2 className="text-base mb-8 font-semibold leading-7 text-gray-900">
                    Media
                  </h2>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="thumbnail"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Thumbnail
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="picture"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Picture
                    </label>
                    <div className="mt-2">
                      <Skeleton height={"2rem"} />
                    </div>
                  </div>
                </div>
                <p className="mt-8 font-bold text-lg">Content</p>
                <Skeleton count={4} height={"1.5rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAdminArtikel;
