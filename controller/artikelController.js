import { NextResponse } from "next/server.js";
import Artikel from "../models/artikelModel.js";
import connectToMongoDb from "lib/mongo/index.js";

// get all artikel
export async function getArtikel() {
  try {
    await connectToMongoDb();

    const artikels = await Artikel.find();
    // res.json(artikels);
    return NextResponse.json({ artikels });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    // console.log(error);
    return NextResponse.json({ message: error.message });
  }
}

// add artikel
export const addArtikel = async (req, res) => {
  try {
    await connectToMongoDb();
    const artikel = await Artikel.create(req.body);
    // res.json({ artikel });
    return NextResponse.json({ artikel });
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
    // res.json(artikel);
    return NextResponse.json({ artikel });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
// get artikel by slug
export const getArtikelBySlug = async (req, params, res) => {
  try {
    await connectToMongoDb();
    const { id } = params.id;
    const artikel = await Artikel.findOne({ slug: id });
    // console.log(req);
    // res.json(artikel);
    return NextResponse.json({ artikel });
  } catch (err) {
    res.status(404).json({ message: err.message });
    return NextResponse.json({ err });
  }
};

// update or edit artikel
export const updateArtikel = async (req, params, res) => {
  try {
    await connectToMongoDb();
    const { id } = params.id;
    // console.log(req.body);
    const updatedArtikel = await Artikel.updateOne(
      { slug: id },
      { $set: req.body }
    );
    res.status(200).json(updatedArtikel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete artikel
export const deleteArtikel = async (req, params, res) => {
  try {
    const { id } = params.id;
    await connectToMongoDb();
    const deletedArtikel = await Artikel.deleteOne({ slug: id });
    res.status(200).json(deletedArtikel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
