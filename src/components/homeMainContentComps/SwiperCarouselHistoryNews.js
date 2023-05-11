import Image from "next/image";
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
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Chip,
  Button,
} from "@material-tailwind/react";

const SwiperCarouselHistoryNews = (props) => {
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
      className={props.className}
      modules={[Navigation, A11y]}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        720: {
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
      {/* <Button className="next">next</Button>
      <Button className="prev">prev</Button> */}
      {dummyImages.map((e, i) => {
        return (
          <SwiperSlide key={i}>
            <Card className="shadow-sm hover:shadow-md overflow-hidden border border-gray-300 ">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src={e.src}
                  alt="ui/ux review check"
                  className="h-1/2 w-full object-cover"
                  width={300}
                  height={100}
                />
              </CardHeader>
              <CardBody className="px-5 py-3">
                <Chip
                  value="category"
                  // variant="gradient"
                  // color="white"
                  className="text-[10px] bg-primaryTheme mb-1 rounded-full py-1 px-2"
                />
                <Typography variant="h5" color="blue-gray">
                  Judul Berita
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Candice Wu">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="candice wu"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
                <Typography className="font-normal">January 10</Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarouselHistoryNews;
