const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./src/models/userSchema');
const Book = require('./src/models/bookSchema');
const Transaction = require('./src/models/transactionSchema');
const bcrypt = require('bcryptjs');

dotenv.config();
const connectDB = require('./src/config/dbConfig');
connectDB();

// Sample data for Users
const users = [
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: bcrypt.hashSync('password123', 10)
    },
    {
        name: 'Bob Smith',
        email: 'bob@example.com',
        password: bcrypt.hashSync('password123', 10)
    },
    {
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        password: bcrypt.hashSync('password123', 10)
    },
    {
        name: 'David King',
        email: 'david@example.com',
        password: bcrypt.hashSync('password123', 10)
    },
    {
        name: 'Eve Parker',
        email: 'eve@example.com',
        password: bcrypt.hashSync('password123', 10)
    }
];

// Sample data for Books
const books = [
    { bookName: 'Harry Potter', category: 'Fiction', rentPerDay: 10 },
    { bookName: 'Lord of the Rings', category: 'Fiction', rentPerDay: 15 },
    { bookName: 'To Kill a Mockingbird', category: 'Classics', rentPerDay: 8 },
    { bookName: '1984', category: 'Dystopian', rentPerDay: 12 },
    { bookName: 'Pride and Prejudice', category: 'Romance', rentPerDay: 6 },
    { bookName: 'The Great Gatsby', category: 'Classics', rentPerDay: 9 },
    { bookName: 'The Catcher in the Rye', category: 'Classics', rentPerDay: 7 },
    { bookName: 'Moby Dick', category: 'Adventure', rentPerDay: 11 },
    { bookName: 'Brave New World', category: 'Dystopian', rentPerDay: 10 },
    { bookName: 'The Hobbit', category: 'Fiction', rentPerDay: 13 },
    { bookName: 'War and Peace', category: 'History', rentPerDay: 14 },
    { bookName: 'The Odyssey', category: 'Classics', rentPerDay: 8 },
    { bookName: 'Anna Karenina', category: 'Romance', rentPerDay: 7 },
    { bookName: 'Crime and Punishment', category: 'Classics', rentPerDay: 12 },
    { bookName: 'The Count of Monte Cristo', category: 'Adventure', rentPerDay: 11 },
    { bookName: 'The Divine Comedy', category: 'Classics', rentPerDay: 9 },
    { bookName: 'Don Quixote', category: 'Classics', rentPerDay: 8 },
    { bookName: 'Dracula', category: 'Horror', rentPerDay: 10 },
    { bookName: 'Frankenstein', category: 'Horror', rentPerDay: 9 },
    { bookName: 'The Shining', category: 'Horror', rentPerDay: 12 }
];

// Function to seed data
const importData = async () => {
    try {
        // Clear existing data
        await User.deleteMany();
        await Book.deleteMany();
        await Transaction.deleteMany();

        // Insert new data
        await User.insertMany(users);
        await Book.insertMany(books);

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error importing data: ${error}`);
        process.exit(1);
    }
};

importData();
