"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/sideBar";
import MenuBarMobile from "@/components/dashboard/menuBarMobile";
import DashboardHome from "@/components/dashboard/DashboardHome";

const Dashboard = async () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-gray-300 ">
        <div className="flex">
          <MenuBarMobile setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className="p-0 md:px-5 md:py-6 flex flex-col flex-grow w-screen md:w-full min-h-screen">
            <DashboardHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
