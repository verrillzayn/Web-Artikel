import SwiperCarouselMain from "./homeMainContentComps/SwiperCarouselMain";
import SwiperCarouselHistoryNews from "./homeMainContentComps/SwiperCarouselHistoryNews";
import ListArtikel from "./homeMainContentComps/ListArtikel";

const HomeMainContent = (props) => {
  return (
    <div className={` w-full px-4 md:w-[65%]`}>
      <h1 className="text-[24px] font-semibold mb-5">Artikels Populer</h1>
      <SwiperCarouselMain className={`ml-0 w-full`} />
      <SwiperCarouselHistoryNews
        className={`p-[10] w-full ml-0 mt-[30px] hidden`}
      />
      <ListArtikel dataPost={props.dataPost} />
    </div>
  );
};

export default HomeMainContent;
