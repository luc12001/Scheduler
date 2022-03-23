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
            let success = await encryption.compare(password, user.password);
            if(success){
                //req.session.user = user;
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
exports.signUpPost = (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;
    //Need to figure out how to do roles
    //const role = "Patient";
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.lastName;
    const address = req.body.address;
    const phone = req.body.phone;

    User.findOne({username: username})
    .then(foundUser => {
        if(foundUser){

        //Error
        throw new Error("Username already exists");
        }

        const newUser = new User({
            username: username,
            password: await encryption.hash(password, 12),
            email: email
        });


    }).catch(error => {
        throw new Error(error);
    });

};