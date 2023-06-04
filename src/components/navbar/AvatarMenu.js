import {
  Laptop2,
  Inbox,
  Power,
  UserCircle2,
  Settings,
  LifeBuoy,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { useSession, signOut as googleSignOut } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AvatarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    setAdminLoading(false);
  }, [pathname]);

  const handleGooleSignOut = () => {
    googleSignOut();
  };

  const handlePopOverOpen = () => setIsMenuOpen((oldval) => !oldval);

  const MenuItem = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="py-2 px-3 w-full rounded-lg transition-all text-start hover:bg-blue-gray-50 hover:bg-opacity-80 select-none text-blue-gray-500 hover:text-blue-gray-900"
      >
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
            <ChevronDown
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        ) : (
          <div className="p-0 rounded-full w-10 h-10 items-center cursor-pointer ">
            <UserCircle2
              size={"2.9rem"}
              color={"#312e81"}
              className="align-middle -translate-x-1 -translate-y-1"
            />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="mr-10">
        {session.user.role === "superAdmin" && (
          <MenuItem
            onClick={() => setAdminLoading(true)}
            className="flex items-center gap-2"
          >
            <Link
              className="w-full flex items-center gap-2"
              href="/admin/dashboard"
            >
              {adminLoading ? (
                <Loader2
                  strokeWidth={2}
                  className="mr-2 h-4 w-4 animate-spin"
                />
              ) : (
                <Laptop2 strokeWidth={2} className="h-4 w-4" />
              )}

              <p className="text-sm">Admin Dashboard</p>
            </Link>
          </MenuItem>
        )}
        <MenuItem>
          <UserCircle2 strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">My Profile</p>
        </MenuItem>
        <MenuItem>
          <Settings strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">Edit Profile</p>
        </MenuItem>
        <MenuItem>
          <Inbox strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">Inbox</p>
        </MenuItem>
        <MenuItem>
          <LifeBuoy strokeWidth={2} className="h-4 w-4" />
          <p className="text-sm">help</p>
        </MenuItem>
        <hr className="my-2 border-blue-gray-100" />
        <button
          onClick={handleGooleSignOut}
          className="py-2 px-3 w-full rounded-lg transition-all text-start hover:bg-red-50 hover:bg-opacity-80 select-none text-red-400 hover:text-blue-gray-900"
        >
          <div className="flex items-center gap-2 leading-tight ">
            <Power strokeWidth={2} color="red" className="h-4 w-4" />
            <p className="text-sm">Sign Out</p>
          </div>
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarMenu;
