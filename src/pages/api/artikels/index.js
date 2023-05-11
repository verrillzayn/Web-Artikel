import connectToMongoDb from "lib/mongo";
import Artikel from "models/artikelModel";
import {
  addArtikel,
  getArtikel,
  getArtikelById,
} from "controller/artikelController";

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    addArtikel(req, res);
  } else if (req.method === "GET") {
    getArtikel(req, res);
  } else if (req.method === "GET") {
    getArtikelById(req, res);
  }
}
