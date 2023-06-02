import Skeleton from "react-loading-skeleton";

const LoadingAdminArtikel = () => {
  return (
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
  );
};

export default LoadingAdminArtikel;
