//Schema and helper functions for the user object
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    //This is where the layout of the user object will go

});

userSchema.static.getDoctorsList = function(){
    return this.find({});
}

userSchema.methods.assignRole = function(userID, newRole) {}

module.exports = mongoose.model("User", userSchema);