import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ManageUser from "@/components/dashboard/manageUser";

const DashboardUsers = () => {
  return (
    <>
      <DashboardLayout
        component={<ManageUser />}
        metaTitle={"Dashboard Users"}
      />
    </>
  );
};

export default DashboardUsers;
