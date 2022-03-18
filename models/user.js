//Schema and helper functions for the user object
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    //This is where the layout of the user object will go

});

userSchema.methods.getAvailabilities = function() {}

userSchema.methods.getAvailability = function(doctorName) {}

userSchema.methods.assignRole = function(userID, newRole) {}

module.exports = mongoose.model("User", userSchema);