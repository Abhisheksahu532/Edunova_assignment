const Book = require('../models/bookSchema');

exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.searchBooks = async (req, res) => {
    const term = req.query.term;
    const books = await Book.find({ bookName: { $regex: term, $options: 'i' } });
    res.json(books);
};

exports.searchByRentRange = async (req, res) => {
    const { min, max } = req.query;
    const books = await Book.find({ rentPerDay: { $gte: min, $lte: max } });
    res.json(books);
};

exports.advancedSearch = async (req, res) => {
    const { category, term, minRent, maxRent } = req.query;
    const books = await Book.find({
        category,
        bookName: { $regex: term, $options: 'i' },
        rentPerDay: { $gte: minRent, $lte: maxRent }
    });
    res.json(books);
};
