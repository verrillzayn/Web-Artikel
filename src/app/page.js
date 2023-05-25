import Home from "../components/homepage/home-page";
import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";

async function getPosts() {
  try {
    await connectToMongoDb();
    const posts = Artikel.find();
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
