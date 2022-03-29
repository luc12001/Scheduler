//Schema and helper functions for the user object
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    //This is where the layout of the user object will go
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {
        type: String,
        enum: ["PATIENT", "DOCTOR", "RECEPTIONIST"],
        default: "PATIENT",
        required: true
    },
    info: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
    }

});

userSchema.static.getDoctorsList = function(){
    return this.find({});
}

userSchema.methods.assignRole = function(userID, newRole) {
    
}

module.exports = mongoose.model("User", userSchema);