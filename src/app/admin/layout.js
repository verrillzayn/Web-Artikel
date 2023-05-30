import DashboardLayout from "@/components/dashboard/DashboardLayout";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};
export default function AdminRootLayout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
