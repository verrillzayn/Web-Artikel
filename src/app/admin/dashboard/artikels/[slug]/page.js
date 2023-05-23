import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminArticleDetail from "@/components/dashboard/adminArticleDetail";
import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";

export const dynamicParams = false;

export async function generateStatiParams() {
  try {
    await connectToMongoDb();
    const posts = await Artikel.find();
    const paths = posts.map((post) => ({
      params: { slug: `${post.slug}` },
    }));
    return {
      paths,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;
  try {
    await connectToMongoDb();
    const post = await Artikel.findOne({ slug });
    return {
      title: `Admin ${post.artikel?.metaTitle}`,
      description: `Admin ${post.artikel?.metaDescription}`,
    };
  } catch (error) {
    console.log(error);
  }
}

const AdminArticleDetailPage = async ({ params }) => {
  const { slug } = params;
  await connectToMongoDb();
  const posts = await Artikel.findOne({ slug });

  return <DashboardLayout component={<AdminArticleDetail posts={posts} />} />;
};

export default AdminArticleDetailPage;
