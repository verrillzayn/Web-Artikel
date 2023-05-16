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
          <div className="bg-white rounded-xl ">
            {/* <DashboardTable posts={props.posts} /> */}
            <div className="flex flex-col overflow-x-auto max-w-[80vw]">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm font-light ">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            no
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Artikel
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Category
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Like
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Comment
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Slug
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr.map((el, index) => {
                          return (
                            <tr
                              key={index}
                              className="border-b transition hover:bg-gray-200 cursor-pointer duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                            >
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                <Skeleton />
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Skeleton />
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Skeleton />
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">-</td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Skeleton />
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Skeleton />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAdminArtikel;
