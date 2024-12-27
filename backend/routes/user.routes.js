const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('name').isLength({min: 3}).withMessage('Name must contain at least three characters'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 chars long')
],
    userController.registerUser
)

module.exports = router;