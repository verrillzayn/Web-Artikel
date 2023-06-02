import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useSession, signOut as googleSignOut } from "next-auth/react";
import Image from "next/image";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AvatarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleGooleSignOut = () => {
    googleSignOut();
  };

  const handlePopOverOpen = () => setIsMenuOpen((oldval) => !oldval);

  const MenuItem = ({ children }) => {
    return (
      <button className="py-2 px-3 w-full rounded-lg transition-all text-start hover:bg-blue-gray-50 hover:bg-opacity-80 select-none text-blue-gray-500 hover:text-blue-gray-900">
        <div className="flex items-center gap-2 leading-tight ">{children}</div>
      </button>
    );
  };

  return (
    <Popover onOpenChange={handlePopOverOpen}>
      <PopoverTrigger>
        {session.user.image ? (
          <div className="hover:bg-gray-200 flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
            <div className="rounded-full w-10 h-10 relative cursor-pointer">
              <Image
                src={session.user.image}
                alt="User's Image Profile"
                fill
                sizes="40px"
                className="rounded-full"
              />
            </div>
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        ) : (
          <div className="p-0 rounded-full w-10 h-10 items-center cursor-pointer ">
            <IoPersonCircle
              size={"2.9rem"}
              color={"#312e81"}
              className="align-middle -translate-x-1 -translate-y-1"
            />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="mr-10">
        {session.user.role === "superAdmin" && (
          <MenuItem className="flex items-center gap-2">
            <ComputerDesktopIcon strokeWidth={2} className="h-4 w-4" />
            <p className="text-sm">Admin Dashboard</p>
          </MenuItem>
        )}
        <MenuItem>
          <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">My Profile</p>
        </MenuItem>
        <MenuItem>
          <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">Edit Profile</p>
        </MenuItem>
        <MenuItem>
          <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">Inbox</p>
        </MenuItem>
        <MenuItem>
          <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">help</p>
        </MenuItem>
        <hr className="my-2 border-blue-gray-100" />
        <button
          onClick={handleGooleSignOut}
          className="py-2 px-3 w-full rounded-lg transition-all text-start hover:bg-red-50 hover:bg-opacity-80 select-none text-red-400 hover:text-blue-gray-900"
        >
          <div className="flex items-center gap-2 leading-tight ">
            <PowerIcon strokeWidth={2} color="red" className="h-4 w-4" />
            <p className="text-sm">Sign Out</p>
          </div>
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarMenu;
