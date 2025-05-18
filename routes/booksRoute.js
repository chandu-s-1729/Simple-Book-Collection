import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Retrieve a list of all books in the collection.
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Retrieve a specific book by its ID.
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Add a new book to the collection.
router.post("/", async (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.status) {
      return response.status(400).send({
        message: "Send all required fields: title, author, status",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
      publishedYear: request.body.publishYear,
      status: request.body.status,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Update the details of an existing book.
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.status) {
      return response.status(400).send({
        message: "Send all required fields: title, author, status",
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    const updatedBook = await Book.findById(id);

    return response.status(200).send({ updatedBook });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Delete a book from the collection.
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response
      .status(204)
      .send({ message: "Book is Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
