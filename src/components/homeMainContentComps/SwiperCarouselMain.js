import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import item from "../carouselItem";
import MainBannerCard from "./MainBannerCard";

const SwiperCarouselMain = (props) => {
  return (
    <Swiper
      className={props.className}
      modules={[Autoplay, A11y]}
      loop={true}
      autoplay={{
        delay: 222500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      slidesPerView={1}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {item.map((e, i) => {
        return (
          <SwiperSlide key={i}>
            <MainBannerCard src={e.src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarouselMain;
