const express = require('express');
const {check} = require("express-validator");

const router = express.Router();

const authController = require("../controllers/auth");
const User = require("../models/user");

router.get('/login', authController.logInGet);
router.post("/login", authController.logInPost);

router.get('/signup', authController.signUpGet);
router.post("/signup", [
    check("username").custom((value, {req}) => {
        return User.findOne({username: req.body.username})
        .then(user => {
            if(user){
                return Promise.reject("Username is already taken");
            }
        });
    }),
    check("confirmPassword").custom((value, {req}) => {
    if(value != req.body.password){
        throw new Error("Passwords have to match");
    } else {
        return true;
    }})
] , authController.signUpPost);

router.post("/logout", authController.logoutPost);

module.exports = router;