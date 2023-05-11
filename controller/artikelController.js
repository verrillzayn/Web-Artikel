import Artikel from "../models/artikelModel.js";
import connectToMongoDb from "lib/mongo/index.js";

// get all artikel
export const getArtikel = async (req, res) => {
  try {
    await connectToMongoDb();

    const artikels = await Artikel.find();
    res.json(artikels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add artikel
export const addArtikel = async (req, res) => {
  try {
    await connectToMongoDb();
    const artikel = await Artikel.create(req.body);
    res.json({ artikel });
  } catch (err) {
    res.json({ err });
  }
};

// get artikel by id
export const getArtikelById = async (req, res) => {
  try {
    await connectToMongoDb();
    const { id } = req.query;
    const artikel = await Artikel.findById(id);
    // console.log(req);
    res.json(artikel);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// update or edit artikel
export const updateArtikel = async (req, res) => {
  try {
    await connectToMongoDb();
    const { id } = req.query;
    // console.log(req.body);
    const updatedArtikel = await Artikel.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.status(200).json(updatedArtikel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete artikel
export const deleteArtikel = async (req, res) => {
  try {
    const { id } = req.query;
    await connectToMongoDb();
    const deletedArtikel = await Artikel.deleteOne({ _id: id });
    res.status(200).json(deletedArtikel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
