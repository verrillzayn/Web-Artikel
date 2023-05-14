import ManageBlogPost from "@/components/dashboard/manageBlogPost";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const DashboardArtikels = ({ posts }) => {
  return (
    <>
      <DashboardLayout
        component={<ManageBlogPost posts={posts} />}
        metaTitle={"Dashboard Artikel"}
      />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/artikels");
  const posts = await res.json();
  // console.log(posts);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default DashboardArtikels;
