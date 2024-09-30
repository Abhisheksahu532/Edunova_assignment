Edunova is a full-stack web application built using Node.js and Express.js as the backend, with MongoDB as the database. This app handles book rentals and user management, including tracking transactions of book issues and returns.

Features
Manage users and books.
Issue and return books with transaction tracking.
API-based structure for easy interaction.
Authentication using JWT tokens.
Book search by name, category, and rent price.
Calculate rent based on book return time.
Tech Stack
Node.js with Express.js
MongoDB for the database
Mongoose for MongoDB interaction
JWT for authentication
Express-validator for data validation
bcryptjs for password hashing
Installation
To run this project locally, follow the steps below:

Prerequisites
Node.js (v14.x or later)
MongoDB installed and running (either locally or on services like MongoDB Atlas)
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/edunova.git
cd edunova
Install dependencies:

bash
Copy code
npm install
Set up environment variables by creating a .env file in the root directory with the following variables:

bash
Copy code
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
Seed the database (optional):

bash
Copy code
npm run seed
Start the server:

bash
Copy code
npm start
Or in development mode:

bash
Copy code
npm run dev
The server should now be running on http://localhost:5000.

API Endpoints
User Endpoints
POST /api/users/register - Register a new user
POST /api/users/login - User login (JWT token authentication)
GET /api/users - Get a list of all users            
Book Endpoints
GET /api/books - Get a list of all books
GET /api/books/search?name=[book_name]&category=[category]&minRent=[min_rent]&maxRent=[max_rent] - Search books by name, category, and rent
GET /api/books/rent-range?min=[min_rent]&max=[max_rent] - Search books by rent range
Transaction Endpoints
POST /api/transactions/issue - Issue a book to a user (requires book name, user, and issue date)
POST /api/transactions/return - Return a book (requires book name, user, and return date)
GET /api/transactions/book?name=[book_name] - Get transactions for a specific book
GET /api/transactions/user?userId=[user_id] - Get transactions for a specific user
GET /api/transactions/date-range?start=[start_date]&end=[end_date] - Get transactions in a date range
