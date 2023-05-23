export async function getPosts(params) {
  // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));
  const res = await fetch(`${NEXT_PUBLIC_LOCAL_URL}/api/artikels/${params}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // await delay(5000);
  // console.log("asdsad");
  const data = await res.json();
  return data;
}
export async function getPostsRevalidateNoUrl(revalidate) {
  // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));
  const res = await fetch(`${NEXT_PUBLIC_LOCAL_URL}/api/artikels`, {
    next: {
      revalidate,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // await delay(5000);
  const data = await res.json();
  return data;
}
