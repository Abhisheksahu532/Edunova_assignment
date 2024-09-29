const express = require('express');
const { registerUser, loginUser } = require('../controllers/authControllers');
const { check } = require('express-validator');

const router = express.Router();

router.post(
    '/register',
    [
        check('name').not().isEmpty(),
        check('email').isEmail(),
        check('password').isLength({ min: 6 })
    ],
    registerUser
);

router.post('/login', loginUser);

module.exports = router;
