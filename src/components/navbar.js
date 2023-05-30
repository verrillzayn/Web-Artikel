"use client";

import { useState } from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Input,
} from "@material-tailwind/react";
import { Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import AvatarMenu from "./navbar/AvatarMenu";
import Skeleton from "react-loading-skeleton";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const { data: session } = useSession();
  const { status } = useSession();

  const handleGooleSignOut = () => {
    signOut();
  };

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <header className="bg-white rounded-t-xl border-b-2">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={`${righteous.className} -m-1.5 p-1.5 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
          >
            <span className="sr-only">dopaminSz</span>
            dopaminSz
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={openDrawer}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Marketplace
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Company
          </Link>
        </Popover.Group>

        <div className="hidden lg:block">
          <Input
            className="w-[30%]"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            label="Search"
          />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
            <AvatarMenu />
          ) : (
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-white rounded-full py-1 px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-2xl"
            >
              Log In <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Drawer placement="right" open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            dopaminSz
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <ComputerDesktopIcon className="h-5 w-5" />
            </ListItemPrefix>
            Admin Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:text-white before:bg-gradient-to-r before:from-pink-500 before:via-indigo-500 before:to-purple-500 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:transition-opacity before:duration-1000 before:delay-0 before:ease-in-out before:opacity-0 before:hover:opacity-100 before:rounded-lg">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5 z-10" />
            </ListItemPrefix>
            {session ? (
              <Link
                onClick={handleGooleSignOut}
                href="/login"
                className="-mx-3 block rounded-lg text-base font-semibold leading-7 text-gray-900"
              >
                Log out
              </Link>
            ) : (
              <Link
                href="/login"
                className="-mx-3 block rounded-lg text-base font-semibold leading-7 text-white z-10"
              >
                Log in
              </Link>
            )}
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
};

export default Navbar;
