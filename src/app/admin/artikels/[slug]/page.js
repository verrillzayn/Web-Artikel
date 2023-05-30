import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";
import ArticleForm from "@/components/dashboard/articleForm";

export const revalidate = 86400;

export async function generateStaticParams() {
  try {
    await connectToMongoDb();
    const posts = await Artikel.find();
    const paths = posts.map((post) => ({
      slug: `${post.slug}`,
    }));
    return paths;
  } catch (error) {
    console.log(error);
  }
}
export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = params;
  try {
    await connectToMongoDb();
    const post = await Artikel.findOne({ slug });
    return {
      title: `Admin ${post?.metaTitle}`,
      description: `Admin ${post?.metaDescription}`,
    };
  } catch (error) {
    console.log(error);
  }
}

const AdminArticleDetailPage = async ({ params }) => {
  const { slug } = params;
  await connectToMongoDb();
  const posts = await Artikel.findOne({ slug });
  const strData = JSON.stringify(posts);
  const serializePost = JSON.parse(strData);

  return (
    <>
      <ArticleForm
        articlePost={serializePost}
        header={"Article Information"}
        saveBtn={true}
        method={"PATCH"}
      />
    </>
  );
};

export default AdminArticleDetailPage;
