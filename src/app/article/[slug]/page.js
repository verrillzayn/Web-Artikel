import ArticlePost from "@/components/artikelPage/ArticlePost";
import { Suspense } from "react";

export const dynamicParams = false;

export async function generateStatiParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels`);
  if (!res.ok) {
    throw new Error("Failed to fetch params");
  }
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { slug: `${post.slug}` },
  }));
  return {
    paths,
  };
}
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/${params.slug}`
  ).then((res) => res.json());

  return {
    title: post.artikel.metaTitle,
    description: post.artikel.metaDescription,
  };
}

async function getPosts(params) {
  // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/${params.slug}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // await delay(5000);
  const data = await res.json();
  return data;
}

const ArticlePage = async ({ params }) => {
  const posts = await getPosts(params);

  return (
    // <Suspense fallback={<div>Slug loading</div>}>
    <ArticlePost posts={posts} params={params.slug} />
    // </Suspense>
  );
};

export default ArticlePage;
