import ManageBlogPost from "@/components/dashboard/manageBlogPost";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";

export const metadata = {
  title: "Dashboard Articles",
  description: "Dashboard Articles",
};

const DashboardArtikels = async () => {
  await connectToMongoDb();
  const artikel = await Artikel.find();
  const strArtikel = JSON.stringify(artikel);
  const posts = JSON.parse(strArtikel);
  return (
    <>
      <DashboardLayout component={<ManageBlogPost posts={posts} />} />
    </>
  );
};

export default DashboardArtikels;
