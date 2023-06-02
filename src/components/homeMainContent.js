import SwiperCarouselMain from "./homeMainContentComps/SwiperCarouselMain";
import SwiperCarouselHistoryNews from "./homeMainContentComps/SwiperCarouselHistoryNews";
import ListArtikel from "./homeMainContentComps/ListArtikel";

const HomeMainContent = ({ dataPost }) => {
  return (
    <div className={`w-full px-4 md:w-[65%] h-min`}>
      <SwiperCarouselMain className={`ml-0 w-full`} />
      <h1 className="text-2xl font-semibold mb-4 mt-10">Continue Reading</h1>
      <div className="h-36">
        <SwiperCarouselHistoryNews className={`h-full w-full ml-0 `} />
      </div>

      <ListArtikel dataPost={dataPost} />
    </div>
  );
};

export default HomeMainContent;
