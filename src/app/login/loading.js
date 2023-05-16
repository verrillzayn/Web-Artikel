import Skeleton from "react-loading-skeleton";

const LoginLoading = () => {
  return (
    <div className="bg-primaryTheme absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-primaryTheme bottom-0 leading-5 h-min p-5 w-full">
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl p-10">
        <div className=" flex-col flex self-center lg:pr-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="mt-14 p-12  bg-white mx-auto min-h-[81vh] rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-3xl text-gray-800">
                <Skeleton width={"25%"} />
              </h3>
              <p className="text-gray-400">
                <Skeleton width={"80%"} />
              </p>
            </div>
            <div className="space-y-5">
              <Skeleton height={"2.5rem"} className="mb-[24px]" />
              <Skeleton height={"2.5rem"} className="mb-[10px]" />
              <div className="text-sm ml-auto flex-row-reverse">
                <Skeleton
                  width={"50%"}
                  // className="flex-auto"
                  containerClassName="flex-1 flex flex-row-reverse"
                />
              </div>
              <div>
                <Skeleton height={"2.5rem"} />
              </div>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-300"></span>
                <span className="text-gray-400 font-normal">or</span>
                <span className="h-px w-16 bg-gray-300"></span>
              </div>
              <div>
                <Skeleton height={"2.5rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLoading;
