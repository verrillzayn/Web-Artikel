import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <>
      <section className="p-3 md:p-0 lg:p-0">
        <div className=" w-full h-[50vh] lg:h-[80vh] overflow-hidden">
          <div
            className={` h-full bg-cover bg-fixed bg-center parallaxBg rounded-lg md:rounded-none lg:rounded-none`}
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            <div className="lg:w-fit max-w-full lg:max-w-[60vw]  px-5 lg:px-2 text-center parallax sticky mx-auto top-[25%] md:top-[45%] lg:top-[50%] ">
              <h1
                className={`text-xl sm:text-3xl p-5 md:p-4 lg:p-2 md:text-4xl lg:text-4xl text-white`}
              ></h1>
            </div>
          </div>
        </div>
      </section>

      <section className="p-2 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center lg:pr-32">
        <article className="py-4 px-0 md:py-20 lg:py-16 lg:w-[50vw] md:w-[70vw] w-fit text-[18px] text-gray-800">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          <br />
          <br />
        </article>
      </section>
      <aside className=" p-2 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center"></aside>
    </>
  );
};

export default Loading;
