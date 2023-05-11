import {
  getArtikelById,
  updateArtikel,
  deleteArtikel,
} from "controller/artikelController";

export default async function handler(req, res) {
  if (req.method === "GET") {
    getArtikelById(req, res);
  } else if (req.method === "PATCH") {
    updateArtikel(req, res);
  } else if (req.method === "DELETE") {
    deleteArtikel(req, res);
  }
}
