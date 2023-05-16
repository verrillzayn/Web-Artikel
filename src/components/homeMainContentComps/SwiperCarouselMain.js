import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import item from "../carouselItem";
import { RiTimerLine, RiCalendarTodoFill } from "react-icons/ri";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Skeleton from "react-loading-skeleton";

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
            <Card
              shadow={false}
              className={`relative text-start shadow-sm grid w-full h-80 items-end overflow-hidden justify-start`}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className={`absolute inset-0 m-0 h-full w-full rounded-none ${e.src} bg-cover bg-center`}
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative lg:w-[55vw] md:w-[50vw] sm:w-[48vw] ">
                <Typography
                  variant="h3"
                  color="white"
                  className="mb-6 max-w-[100%] font-semibold leading-[1.5]"
                >
                  Peran blaa bla bablaabl 2023
                </Typography>

                <div className="w-full flex justify-between">
                  <Typography
                    variant="h6"
                    className="text-[12px] text-gray-400"
                  >
                    <RiTimerLine
                      title="time"
                      // color="grey"
                      className="react-icons"
                    />{" "}
                    5 min
                    <br />
                    <RiCalendarTodoFill
                      title="date"
                      // color="grey"
                      className="react-icons mr-1"
                    />
                    11 jan 22
                  </Typography>
                  <Button className="!max-h-10 !bg-primaryTheme hover:shadow-indigo-600 hover:shadow-md shadow-md shadow-indigo-800 ">
                    Read More
                  </Button>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarouselMain;
