import AddArtikelModal from "@/components/dashboard/addArtikelModal";
import DashboardTable from "@/components/dashboard/dashboardTable";
import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";
import Comment from "models/commentModel";

export const revalidate = 86400;

export const metadata = {
  title: "Dashboard Articles",
  description: "Dashboard Articles",
};

const DashboardArtikels = async () => {
  await connectToMongoDb();
  const artikel = await Artikel.find();
  const comment = await Comment.find();
  const result = await Promise.all([artikel, comment]);
  console.log(result[0]);
  const strArtikel = JSON.stringify(result[0]);
  const strComment = JSON.stringify(result[1]);
  const komentar = JSON.parse(strComment);
  const posts = JSON.parse(strArtikel);
  return (
    <>
      <div className="sticky top-0 h-0">
        <AddArtikelModal />
      </div>
      <div className="bg-white rounded-xl ">
        <DashboardTable posts={posts} comment={komentar} />
      </div>
    </>
  );
};

export default DashboardArtikels;
