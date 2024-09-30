# Library Management System

## Overview

This Library Management System is a Node.js application using MongoDB as the database. The project is designed to manage books, users, and transactions efficiently. The system includes several APIs to interact with the backend, and it has been deployed for remote testing.

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript code server-side.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database used for storing data.
- **Postman**: Tool for API testing (for testing API endpoints).
- **Render**: Deployment platform.

## API Endpoints

### **User Endpoints** (Protected)

- **`POST /api/auth/register`** - Register a new user
- **Input:**
  ```json
  {
    "name": "John Doe",
    "email": "EMAIL",
    "password": "password123"
  }
  ```



### **Book Endpoints**

- **`GET /api/books`** - Get a list of all books  
- **Output:** List of all books with details.

- **`GET /api/books/search?name=[book_name]&category=[category]&minRent=[min_rent]&maxRent=[max_rent]`** - Search books by name, category, and rent price.  
- **Output:** List of matching books based on query parameters.

- **`GET /api/books/rent-range?min=[min_rent]&max=[max_rent]`** - Get books within a specific rent range.  
- **Output:** List of books with rent per day within the range.

### **Transaction Endpoints** (Protected)

- **`POST /api/transactions/issue`** - Issue a book to a user  
- **Requires Authentication**: Include the JWT token in the request headers.
- **Input:** 
  ```json
  {
    "bookName": "Book Title",
    "userId": "user_id",
    "issueDate": "YYYY-MM-DD"
  }
  ```
- **Output:** 
  ```json
  {
    "message": "Book issued successfully"
  }
  ```

- **`POST /api/transactions/return`** - Return a book and calculate rent  
- **Requires Authentication**: Include the JWT token in the request headers.
- **Input:** 
  ```json
  {
    "bookName": "Book Title",
    "userId": "user_id",
    "returnDate": "YYYY-MM-DD"
  }
  ```
- **Output:** Rent is calculated, and the transaction is updated.


## Helper APIs

- **`GET /api/books`** - Get all books.

## Deployment

1. Push your code to a GitHub repository.
2. Create a new Web Service on Render, connected to your GitHub repository.
3. Set up environment variables (MONGODB_URI, JWT_SECRET) in Render's Environment settings.
4. Deploy the service.
5. You can monitor logs and check for successful deployment.