import Image from "next/image";
import { RiTimerLine, RiCalendarTodoFill } from "react-icons/ri";
import { Button } from "../ui/button";

const MainBannerCard = ({ src }) => {
  return (
    <div className="aspect-[16/9] relative">
      <Image className="rounded-lg" fill alt="banner" src={src} />
      <div className="to-bg-black-10 absolute inset-0 h-full rounded-b-md w-full bg-gradient-to-t from-black/80 via-black/50" />
      <div className="w-full h-full absolute flex flex-col gap-4 justify-end px-6 py-9">
        <div>
          <h2 className="scroll-m-20 text-white pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Peran bla bla bla blaaa
          </h2>
        </div>
        <div className="w-full flex justify-between">
          <p className="text-xs text-gray-400 [&:not(:first-child)]:mt-6">
            <RiTimerLine title="time" className="react-icons" /> 5 min
            <br />
            <RiCalendarTodoFill title="date" className="react-icons mr-1" />
            11 jan 22
          </p>
          <Button className="bg-primaryTheme font-semibold text-xs px-5 shadow-md">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainBannerCard;
