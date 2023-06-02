import Image from "next/image";

const HistoryNewsCard = ({ src, judul }) => {
  return (
    <div className="shadow-sm hover:shadow-md h-full relative  rounded-lg bg-[#e4e1ec] overflow-hidden">
      <Image
        src={src}
        alt="ui/ux review check"
        className="h-1/2 w-full object-cover rounded-lg"
        fill
      />
      <div className="!absolute rounded-lg bg-white/10 backdrop-blur-sm w-full h-[40%] bottom-0">
        <div className="py-4 px-3">
          <p className="text-white">{judul}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryNewsCard;
