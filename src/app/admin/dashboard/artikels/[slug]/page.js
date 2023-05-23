import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminArticleDetail from "@/components/dashboard/adminArticleDetail";
import { getPosts } from "lib/function/getArtikel";

export const dynamicParams = false;

export async function generateStatiParams() {
  const res = await fetch(`/api/artikels`);
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
  const post = await fetch(`/api/artikels/${slug}`, {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return {
    title: `Admin ${post.artikel?.metaTitle}`,
    description: `Admin ${post.artikel?.metaDescription}`,
  };
}

const AdminArticleDetailPage = async ({ params }) => {
  const artikel = await getPosts(params.slug);
  const posts = artikel.artikel;

  return <DashboardLayout component={<AdminArticleDetail posts={posts} />} />;
};

export default AdminArticleDetailPage;
