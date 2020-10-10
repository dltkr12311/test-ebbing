const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

// *POST /user/signup
router.post('/signup', userController.signup);

// *POST /user/signin
router.post('/signin',userController.signin);

module.exports = router;