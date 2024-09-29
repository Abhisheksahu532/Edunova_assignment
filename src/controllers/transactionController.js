const Transaction = require('../models/transactionSchema');

exports.issueBook = async (req, res) => {
    const { bookId, userId, issueDate } = req.body;

    // Check if the book is already issued and not yet returned
    const existingTransaction = await Transaction.findOne({ bookId, returnDate: null });
    if (existingTransaction) {
        return res.status(400).json({ message: 'Book is already issued to someone else' });
    }
    // Create new transaction
    const transaction = new Transaction({ bookId, userId, issueDate });
    await transaction.save();
    res.json({ message: 'Book issued successfully' });
};

exports.returnBook = async (req, res) => {
    const { transactionId, returnDate } = req.body;

     // Fetch the transaction details
     const transaction = await Transaction.findById(transactionId).populate('bookId');
     if (!transaction || transaction.returnDate) {
         return res.status(400).json({ message: 'Invalid transaction or book already returned' });
     }
    const days = (new Date(returnDate) - new Date(transaction.issueDate)) / (1000 * 60 * 60 * 24);
    const totalRent = days * transaction.bookId.rentPerDay;

    // Update return date and total rent
    transaction.returnDate = returnDate;
    transaction.totalRent = totalRent;
    await transaction.save();

    // Rent retured successfully
    res.json({ message: 'Book returned', totalRent });
};
