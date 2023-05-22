import Home from "../components/homepage/home-page";

// ini coba save commit checkpoint
async function getPosts() {
  // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // await delay(5000);
  // console.log(res);
  const posts = await res.json();
  return posts;
}

export default async function Index() {
  const post = await getPosts();

  return <Home data={post} />;
  // return <div>a</div>;
}
