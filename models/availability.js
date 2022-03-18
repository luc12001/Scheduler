//Schema and helper functions for the availability object
const mongoose = require("mongoose");


const availabilitySchema = new mongoose.Schema({

    //This is where the layout of the user object will go

});

availabilitySchema.methods.updateAppointment = function(availability){}


module.exports = mongoose.model("Availability", availabilitySchema);