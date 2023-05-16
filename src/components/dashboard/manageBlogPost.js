"use client";

import DashboardTable from "./dashboardTable";
import AddArtikelModal from "./addArtikelModal";

const ManageBlogPost = (props) => {
  return (
    <>
      <div className="sticky top-0 h-0">
        <AddArtikelModal />
      </div>
      <div className="bg-white rounded-xl ">
        <DashboardTable posts={props.posts} />
      </div>
    </>
  );
};

export default ManageBlogPost;
