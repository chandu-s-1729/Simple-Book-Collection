import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

//Middleware for parsing the request body
app.use(express.json());

//Middleware for handling CORS POLICY
app.use(cors());


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to BookStore App");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
