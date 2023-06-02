"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./user-table/columns";

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    role: "Admin",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    role: "Admin",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    role: "Admin",
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    role: "Admin",
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    role: "Admin",
    date: "04/10/21",
  },
];

const DashboardUserTable = () => {
  return (
    <div className="h-full w-full bg-white px-6 py-10 rounded-lg">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <h2 className="text-blue-gray-900 pl-3 scroll-m-20 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
            Users
          </h2>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <form className={`relative flex w-full md:w-72`}>
            <button className="hover:bg-[#e2dfff] !absolute right-2 rounded-full p-1 top-1">
              <MagnifyingGlassIcon
                color={`var(--color-primarytiga)`}
                className="w-6 h-6"
              />
            </button>
            <Input
              className="pl-4 border-gray-400"
              type="search"
              placeholder="Search User.."
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
        <Button
          // onClick={() => console.log("first")}
          className="flex items-center gap-3"
          color="blue"
          size="sm"
        >
          <UserPlusIcon strokeWidth={2} className="h-6 w-4" /> Add User
        </Button>
      </div>

      <DataTable className={"mt-6"} columns={columns} data={TABLE_ROWS} />
    </div>
  );
};

export default DashboardUserTable;
