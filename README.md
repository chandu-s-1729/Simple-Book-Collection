### Project Overview
This project implements a RESTful API for managing a personal book collection. It allows users to perform CRUD operations (Create, Read, Update, Delete) on books, stored in a MongoDB database using Mongoose for data modeling. The API is built with Node.js and Express, and includes error handling, data validation, and middleware for parsing JSON and handling CORS.

### Installation Instructions
To run this project locally, follow these steps:

Clone the repository:

bash
Copy
Edit
git clone <repository_url>
cd <project_directory>
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:
Create a .env file in the root directory and configure MongoDB connection URI (e.g., MONGODB_URI=mongodb://localhost:27017/book_collection).

Start the server:

bash
Copy
Edit
npm start

### Database Setup Guide
Ensure MongoDB is installed and running locally or configure a remote MongoDB instance. Update the .env file with your MongoDB URI to connect the API to your database.

### API Documentation
GET /books
Retrieve a list of all books in the collection.

Response:

json
Copy
Edit
[
  {
    "id": "ObjectId",
    "title": "Book Title",
    "author": "Author Name",
    "genre": "Fiction",
    "publishedYear": 2020,
    "status": "reading",
    "createdAt": "2025-04-11T00:00:00Z"
  }
]
GET /books/:id
Retrieve a specific book by its ID.

Response:

json
Copy
Edit
{
  "id": "ObjectId",
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "publishedYear": 2020,
  "status": "reading",
  "createdAt": "2025-04-11T00:00:00Z"
}
POST /books
Add a new book to the collection.

Request Body:

json
Copy
Edit
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "publishedYear": 2020,
  "status": "unread"
}
Response:

json
Copy
Edit
{
  "id": "ObjectId",
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "publishedYear": 2020,
  "status": "unread",
  "createdAt": "2025-04-11T00:00:00Z"
}
PUT /books/:id
Update the details of an existing book.

Request Body:

json
Copy
Edit
{
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "genre": "Non-Fiction",
  "publishedYear": 2021,
  "status": "reading"
}
Response:

json
Copy
Edit
{
  "id": "ObjectId",
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "genre": "Non-Fiction",
  "publishedYear": 2021,
  "status": "reading",
  "createdAt": "2025-04-11T00:00:00Z"
}
DELETE /books/:id
Delete a book from the collection.

Response:
Status Code: 204 No Content

### Test Cases and Error Handling
Data Validation: Ensure required fields (title, author, status) are provided and status is one of the predefined enum values (unread, reading, read).

### Error Handling: 
Return appropriate HTTP status codes (e.g., 404 Not Found, 400 Bad Request) for invalid requests, missing parameters, or other errors.

### Database Integration: 
Verify CRUD operations correctly interact with MongoDB using Mongoose.
