const express = require('express');
const router = express.Router();
const { searchBooks, searchByRentRange, advancedSearch } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');


router.get('/search', protect, searchBooks);
router.get('/rent', protect, searchByRentRange);
router.get('/filter', protect, advancedSearch);

module.exports = router;
