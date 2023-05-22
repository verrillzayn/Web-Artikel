import mongoose, { model, models } from "mongoose";

const comment = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  artikel: { type: mongoose.Schema.Types.ObjectId, ref: "Artikel" },
  replyComment: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Comment", default: [] },
  ],
  content: {
    type: "String",
    required: true,
  },
  createdAt: {
    type: "Date",
    default: Date.now,
  },
});

const Comment = models.Comment || model("Comment", comment);

export default Comment;
