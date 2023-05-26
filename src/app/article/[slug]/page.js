import ArticlePost from "@/components/artikelPage/ArticlePost";
import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";

export const dynamicParams = false;
export const revalidate = 5;

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
      title: post.metaTitle,
      description: post.metaDescription,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getPosts(params) {
  // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));
  // await delay(5000);
  try {
    await connectToMongoDb();
    const data = await Artikel.findOne({ slug: params });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const ArticlePage = async ({ params }) => {
  const { slug } = params;
  const artikel = await getPosts(slug);
  const strposts = JSON.stringify(artikel);
  const posts = JSON.parse(strposts);

  return <ArticlePost posts={posts} params={slug} />;
};

export default ArticlePage;
