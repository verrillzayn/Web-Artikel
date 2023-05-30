import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
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

const AvatarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleGooleSignOut = () => {
    googleSignOut();
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
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
      </MenuHandler>
      <MenuList>
        {session.user.role === "superAdmin" && (
          <MenuItem className="flex items-center gap-2">
            <ComputerDesktopIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              Admin Dashboard
            </Typography>
          </MenuItem>
        )}
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Inbox
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          onClick={handleGooleSignOut}
          className="flex items-center gap-2 hover:bg-red-50 active:bg-red-50 focus:bg-red-50"
        >
          <PowerIcon strokeWidth={2} color="red" className="h-4 w-4" />
          <Typography color="red" variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
