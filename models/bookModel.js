import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: { type: String, optional: true },
    publishedYear: { type: Number, optional: true },
    status: {
      type: String,
      enum: ["unread", "reading", "read"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("BooksCollection", bookSchema);
