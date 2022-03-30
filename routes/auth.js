const express = require('express');
const router = express.Router();

const authController = require("../controllers/auth");

router.get('/login', authController.logInGet);
router.post("/login", authController.logInPost);

router.get('/signup', authController.signUpGet);
router.get("/signup", authController.signUpPost);


module.exports = router;