import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { useSession, signOut as googleSignOut } from "next-auth/react";
import Image from "next/image";
import { IoPersonCircle } from "react-icons/io5";

const AvatarMenu = () => {
  const { data: session } = useSession();

  const handleGooleSignOut = () => {
    googleSignOut();
  };

  return (
    <Menu>
      <MenuHandler>
        {session.user.image ? (
          <div className="border border-black rounded-full w-10 h-10 relative cursor-pointer">
            <Image
              src={session.user.image}
              alt="User's Image Profile"
              fill
              sizes="40px"
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="p-0 rounded-full w-10 h-10 items-center cursor-pointer ">
            <IoPersonCircle
              size={"2.9rem"}
              color={"#312e81"}
              className="align-middle -translate-x-1 -translate-y-1"
            />
            {/* <IoPersonCircle size={"7rem"} color={"blue"} className="mt-10" /> */}
          </div>
          // <div className="border border-black p-0 rounded-full w-10 h-10 pb-10 inline-flex items-center cursor-pointer">
          //   <IoPersonCircle size={"7rem"} color={"blue"} className="mt-10" />
          // </div>
        )}
      </MenuHandler>
      <MenuList>
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
          className="flex items-center gap-2 "
        >
          <PowerIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            {/* <button onClick={handleGooleSignOut}>Sign Out</button> */}
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
