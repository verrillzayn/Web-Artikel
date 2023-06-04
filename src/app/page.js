import Home from "../components/homepage/home-page";
import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";

export const revalidate = 86400;

async function getPosts() {
  try {
    await connectToMongoDb();
    const posts = Artikel.find();
    // console.log("fetching data for homepage");
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export default async function Index() {
  const artikel = await getPosts();
  const strposts = JSON.stringify(artikel);
  const post = JSON.parse(strposts);

  return <Home data={post} />;
}
