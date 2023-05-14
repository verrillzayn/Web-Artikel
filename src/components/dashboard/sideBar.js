// @/components/Layout/Sidebar.js
import { MdSpaceDashboard } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { FaTshirt, FaRedhat } from "react-icons/fa";
import { useRouter } from "next/router";

const SideBar = ({ show, setter, child }) => {
  const router = useRouter();

  // Define our base class
  const className =
    "bg-white w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route, url }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === url
        ? "text-white bg-primaryTheme"
        : "text-gray-600 hover:text-gray-800";

    return (
      <div
        onClick={() => {
          setter((oldVal) => !oldVal);
          child(route);
          router.push(url);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass} hover:cursor-pointer rounded-2xl`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div className="hover:cursor-pointer">{name}</div>
      </div>
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
            route="Dashboard"
            icon={<MdSpaceDashboard />}
          />
          <MenuItem
            name="Blog Post"
            route="blogPost"
            url="/admin/dashboard/artikels"
            icon={<IoNewspaper />}
          />
          <MenuItem
            name="Manage User"
            url="/admin/dashboard/users"
            route="manageUser"
            icon={<FaTshirt />}
          />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
};

export default SideBar;
