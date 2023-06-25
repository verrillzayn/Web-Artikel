"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Laptop2,
  ShoppingBag,
  Inbox,
  Power,
  UserCircle2,
  Settings,
  Search,
} from "lucide-react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import AvatarMenu from "./navbar/AvatarMenu";
import Skeleton from "react-loading-skeleton";
import { Righteous } from "next/font/google";
import { Input } from "./ui/input";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const { data: session } = useSession();
  const { status } = useSession();

  const handleGooleSignOut = () => {
    signOut();
  };

  const SheetItem = ({ children }) => {
    return (
      <button className="py-3 px-3 my-1 w-full outline-none rounded-lg transition-all text-start hover:bg-blue-gray-50 hover:bg-opacity-80 select-none text-blue-gray-500 hover:text-blue-gray-900 font-semibold">
        <div className="flex items-center gap-2 leading-tight ">{children}</div>
      </button>
    );
  };

  return (
    <header className="bg-white rounded-t-xl border-b-2">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:pl-8 lg:pr-5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={`${righteous.className} -m-1.5 p-1.5 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 `}
          >
            <span className="sr-only">dopaminSz</span>
            dopaminSz
          </Link>
        </div>
        <div
          className={`${
            session ? "w-[35%] gap-3" : "w-[40%] gap-4"
          } flex justify-end`}
        >
          <form
            className={`relative flex mt-0.5 ${
              session ? "w-[80%]" : "w-[75%] lg:w-[60%]"
            }`}
          >
            <button
              aria-label="search"
              className="hover:bg-[#e2dfff] !absolute left-1 rounded-full p-1 top-1"
            >
              <Search color={`var(--color-primarytiga)`} className="w-6 h-6" />
            </button>
            <Input
              className="pl-11"
              type="search"
              placeholder="Search dopaminSz.."
            />
          </form>
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="rounded-lg hover:bg-[#e2dfff] p-1">
                  <HiOutlineMenuAlt3
                    color={`#100563`}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </SheetTrigger>
              <SheetContent size="lg">
                <SheetHeader>
                  <SheetTitle className="text-blue-gray-600 text-2xl mb-4 mt-4">
                    dopaminSz
                  </SheetTitle>
                </SheetHeader>
                <div className="min-h-[70vh] gap-5">
                  {session?.user.role === "superAdmin" && (
                    <SheetItem>
                      <Laptop2 className="h-5 w-5" />
                      <p className="text-base">Admin Dashboard</p>
                    </SheetItem>
                  )}
                  <SheetItem>
                    <ShoppingBag className="h-5 w-5" />
                    <p className="text-base">E-Commerce</p>
                  </SheetItem>
                  <SheetItem>
                    <Inbox className="h-5 w-5" />
                    <p className="text-base w-[85%]">Inbox</p>{" "}
                    <span className="rounded-full w-[10%] bg-[#e2dfff] text-center font-semibold py-0.5 text-blue-gray-900">
                      14
                    </span>
                  </SheetItem>
                  <SheetItem>
                    <UserCircle2 className="h-5 w-5" />
                    <p className="text-base">Profile</p>
                  </SheetItem>
                  <SheetItem>
                    <Settings className="h-5 w-5" />
                    <p className="text-base">Settings</p>
                  </SheetItem>
                </div>
                <div>
                  {session ? (
                    <button
                      onClick={handleGooleSignOut}
                      className="relative group h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:text-white before:bg-gradient-to-r before:from-pink-500 before:via-indigo-500 before:to-purple-500 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:transition-opacity before:duration-1000 before:delay-0 before:ease-in-out before:opacity-0 before:hover:opacity-100 before:rounded-lg py-3 px-3 my-1 w-full rounded-lg font-semibold"
                    >
                      <Power className="h-5 w-5 opacity-0 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[140%] group-hover:opacity-100 group-hover:-translate-y-[50%] transition-all ease-in duration-300" />
                      <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:-translate-y-[-80%] group-hover:opacity-0 transition-all ease-in duration-300">
                        Log Out
                      </p>
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="relative block group h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:text-white before:bg-gradient-to-r before:from-pink-500 before:via-indigo-500 before:to-purple-500 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:transition-opacity before:duration-1000 before:delay-0 before:ease-in-out before:opacity-0 before:hover:opacity-100 before:rounded-lg py-3 px-3 my-1 w-full rounded-lg font-semibold"
                    >
                      <Power className="h-5 w-5 opacity-0 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[140%] group-hover:opacity-100 group-hover:-translate-y-[50%] transition-all ease-in duration-300" />
                      <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:-translate-y-[-80%] group-hover:opacity-0 transition-all ease-in duration-300">
                        Sign In
                      </p>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className={`hidden lg:flex lg:justify-end`}>
            {status === "loading" ? (
              <div className="rounded-full w-10 h-10 relative p-0 cursor-pointer">
                <Skeleton
                  duration={1}
                  className="-translate-y-1"
                  height={"100%"}
                  circle
                />
              </div>
            ) : session ? (
              <>
                <AvatarMenu />
              </>
            ) : (
              <Link
                href="/login"
                className="text-sm relative font-semibold leading-6 text-white rounded-full py-1 px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[80%] my-auto min-w-[5.5rem] before:bg-gradient-to-r before:from-pink-500 before:via-indigo-500 before:to-purple-500 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:transition-opacity before:duration-1000 before:delay-0 before:ease-in-out before:opacity-0 before:hover:opacity-100 before:rounded-full shadow-xl"
              >
                <p className="!absolute left-4">Log In </p>
                <span aria-hidden="true" className="absolute right-3">
                  &rarr;
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
