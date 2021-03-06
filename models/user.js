//Schema and helper functions for the user object
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    //This is where the layout of the user object will go
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["PATIENT", "DOCTOR", "RECEPTIONIST"],
        default: "PATIENT",
        required: true
    },
    info: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: {type: String, required: true},
        address: {type: String, required: true},
        mail: {type: String, required: true}
    }

});

userSchema.static.getDoctorsList = function() {
    return this.find({ role: "DOCTOR" });
}

userSchema.methods.assignRole = function(newRole) {
    this.role = newRole;
}

module.exports = mongoose.model("User", userSchema);
