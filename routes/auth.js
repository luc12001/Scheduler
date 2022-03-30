const express = require('express');
const router = express.Router();

const authController = require("../controllers/auth");

router.get('/login', authController.logInGet);
router.get('/signup', authController.signUpGet);


module.exports = router;