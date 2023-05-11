import mongoose, { model, models } from "mongoose";

const artikel = mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  metaTitle: {
    type: "String",
    required: true,
  },
  metaDescription: {
    type: "String",
    required: true,
  },
  content: {
    type: "String",
    required: true,
  },
  category: {
    type: ["String"],
    required: true,
  },
  slug: {
    type: "String",
    required: true,
    unique: true,
  },
  comment: {
    type: ["Mixed"],
  },
  summary: {
    type: "String",
  },
  dateCreated: {
    type: "Date",
    default: Date.now,
  },
  datePublished: {
    type: "Date",
  },
  media: {
    thumbnail: {
      type: "String",
    },
    picture: {
      type: "String",
    },
  },
});

const Artikel = models.Artikel || model("Artikel", artikel);

export default Artikel;
