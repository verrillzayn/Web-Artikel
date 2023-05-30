import AddArtikelModal from "@/components/dashboard/addArtikelModal";
import DashboardTable from "@/components/dashboard/dashboardTable";
import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";

export const revalidate = 86400;

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
      <div className="sticky top-0 h-0">
        <AddArtikelModal />
      </div>
      <div className="bg-white rounded-xl ">
        <DashboardTable posts={posts} />
      </div>
    </>
  );
};

export default DashboardArtikels;
