//The logic for authenticating someone, signing up, and logging in
const encryption = require("bcryptjs");
const { response } = require("express");

const User = require("../models/user");

/**********************************
 * Login system
 * 
 * The logic for the post request of the login page
 * Verifies that the person logging in has the right credentials
 * and then stores the info in a session
 * 
 * requires:
 *      username
 *      password
 * *******************************/

exports.logInGet = (req, res, next) => {
    res.render("auth/login");
}

exports.logInPost = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username})
    .then(user => {
        //If a user wasn't found
        if(!user){
            //Temporary until there is a better way of showing an error
            throw "User not found";
        } else {

            //Only the hash is stored in the database
            //So we only need to compare hashes.
            let success = encryption.compare(password, user.password);
            if(success){
                //req.session.userId = user._id;
                return response.redirect("/")
            } else {
                throw "User not found"
            }
        }

    }).catch(error => {
        //logic for error handling
    })


};

/**********************************
 * Sign up system
 * 
 * The logic for the post request of the signup page
 * 
 * 
 * requires:
 *      username
 *      password
 *      role
 *      email
 *      firstName
 *      lastName
 *      address
 *      phone
 * *******************************/

 exports.signUpGet = (req, res, next) => {
    res.render("auth/signup");
}
exports.signUpPost = (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmpassword
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.lastName;
    const address = req.body.address;
    const phone = req.body.phone;

    if(password != confirmPassword){
        throw new Error("Both passwords need to match");
    }

    User.findOne({username: username})
    .then(foundUser => {
        if(foundUser){
            //Error
            throw new Error("Username already exists");
        }

        let hashed = encryption.hash(password, 12)

        const newUser = new User({
            username: username,
            password: hashed,
            info: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone
            }
        });
    }).catch(error => {
        throw new Error(error);
    });

};