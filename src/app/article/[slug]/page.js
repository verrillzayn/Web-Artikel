import ArticlePost from "@/components/artikelPage/ArticlePost";

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels`);
  if (!res.ok) {
    throw new Error("Failed to fetch params");
  }
  const posts = await res.json();
  const paths = posts?.artikels.map((post) => ({
    slug: `${post.slug}`,
  }));
  return paths;
}
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params;

  // fetch data
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/${slug}`
  ).then((res) => res.json());

  return {
    title: post.artikel?.metaTitle,
    description: post.artikel?.metaDescription,
  };
}

async function getPosts(params) {
  // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/${params}`,
    { next: { revalidate: 10 } }
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  // await delay(5000);
  const data = await res.json();
  return data;
}

const ArticlePage = async ({ params }) => {
  const { slug } = params;
  const posts = await getPosts(slug);

  return <ArticlePost posts={posts} params={params.slug} />;
};

export default ArticlePage;
