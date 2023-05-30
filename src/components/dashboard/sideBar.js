"use client";

import { MdSpaceDashboard } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { FaTshirt } from "react-icons/fa";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

const SideBar = ({ show, setter }) => {
  const pathname = usePathname();
  const params = useParams();
  const className =
    "bg-white w-[250px] transition-[margin-left] ease-in-out duration-500 fixed lg:static top-0 bottom-0 left-0 z-40";
  const appendClass = show ? " ml-0" : " ml-[-250px] lg:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, url }) => {
    const colorClass =
      pathname === url || pathname === `${url}/${params?.slug}`
        ? "text-white bg-primaryTheme"
        : "text-gray-600 hover:text-gray-800";

    const handleClick = () => {
      if (show) {
        setter((oldVal) => !oldVal);
      }
    };

    return (
      <Link
        onClick={handleClick}
        href={url}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass} hover:cursor-pointer rounded-2xl`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div className="hover:cursor-pointer">{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass} shadow-2xl`}>
        <div className="flex flex-col py-8 px-3">
          <MenuItem
            url="/admin/dashboard"
            name="Dashboard"
            icon={<MdSpaceDashboard />}
          />
          <MenuItem
            name="Blog Post"
            url="/admin/artikels"
            icon={<IoNewspaper />}
          />
          <MenuItem name="Manage User" url="/admin/users" icon={<FaTshirt />} />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
};

export default SideBar;
