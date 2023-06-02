import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HistoryNewsCard from "./HistoryNewsCard";

const SwiperCarouselHistoryNews = ({ className }) => {
  const dummyImages = [
    // { src: "https://unsplash.com/photos/NxnaBVWXJVU" },
    { src: "https://picsum.photos/400/205" },
    { src: "https://picsum.photos/400/205" },
    { src: "https://picsum.photos/400/204" },
    { src: "https://picsum.photos/400/203" },
    { src: "https://picsum.photos/400/202" },
    { src: "https://picsum.photos/400/201" },
  ];

  return (
    <Swiper
      className={className}
      modules={[Navigation, A11y]}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        720: {
          slidesPerView: 3,
        },
        360: {
          slidesPerView: 2,
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <button className="prev absolute top-0 left-0 bottom-0 m-auto z-10 bg-white h-min rounded-full">
        <BsFillArrowLeftCircleFill color={`var(--color-primary)`} size="2em" />
      </button>
      <button className="next absolute top-0 bottom-0 right-0 m-auto z-10  bg-white h-min rounded-full">
        <BsFillArrowRightCircleFill color={`var(--color-primary)`} size="2em" />
      </button>
      {dummyImages.map((e, i) => {
        return (
          <SwiperSlide key={i}>
            <HistoryNewsCard src={e.src} judul={"judul berita"} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarouselHistoryNews;
