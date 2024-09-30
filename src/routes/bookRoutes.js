const express = require('express');
const router = express.Router();
const { getAllBooks, searchBooks, searchByRentRange, advancedSearch } = require('../controllers/bookController');

router.get('/', getAllBooks);
router.get('/search', searchBooks);
router.get('/rent', searchByRentRange);
router.get('/filter', advancedSearch);

module.exports = router;
