import ManageBlogPost from "@/components/dashboard/manageBlogPost";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getPostsRevalidateNoUrl } from "lib/function/getArtikel";

export const metadata = {
  title: "Dashboard Articles",
  description: "Dashboard Articles",
};

const DashboardArtikels = async () => {
  const posts = await getPostsRevalidateNoUrl(10);
  // console.log(posts);
  return (
    <>
      <DashboardLayout component={<ManageBlogPost posts={posts.artikels} />} />
    </>
  );
};

export default DashboardArtikels;
