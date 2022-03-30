//The logic for authenticating someone, signing up, and logging in
const encryption = require("bcryptjs");
const validator = require("express-validator");

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

    console.log(username);

    User.findOne({username: username})
    .then(user => {
        //If a user wasn't found
        if(!user){
            //Temporary until there is a better way of showing an error
            req.flash("error", "Username or password are incorrect");
            res.redirect("/login");
        } else {

            //Only the hash is stored in the database
            //So we only need to compare hashes.
            encryption.compare(password, user.password)
            .then(success => {
                if(success){
                    req.session.userId = user._id;
                    console.log(req.session.userId);
                    console.log("Login successful");
                    return res.redirect("/")
                } else {
                    req.flash("error", "Username or password are incorrect");
                    res.redirect("/login");
                }
            });
        }

    }).catch(error => {
        //logic for error handling
    })

    //res.redirect("/");
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
    const confirmPassword = req.body.confirmPassword;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.homeAddress;
    const mail = req.body.mailingAddress;
    const phone = req.body.phoneNumber;

    console.log(username);

    const errors = validator.validationResult(req);

    if(!errors.isEmpty()){
        let message = "";
        let knownErrors = errors.array();
        //console.log(knownErrors);
        for(let error of knownErrors){
            message += error.msg + "<br>";
        }


        return res.status(422).render("auth/signup", {
            errorMessage: message
        });
    }

    User.findOne({username: username})
    .then(foundUser => {
        if(foundUser){
            //Error
            req.flash("error", "Username already exists");
            res.redirect("/login");
        }

        encryption.hash(password, 12)
        .then(hashed => {
            const newUser = new User({
            username: username,
            password: hashed,
            info: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone,
                mail: mail
            }
        });

        return newUser.save();
        });

        
    }).then(result => {
        console.log(result);
        res.redirect("/");
    })
    .catch(error => {
        console.log(error);
        throw new Error(error);
    });

};