//Schema and helper functions for the apointment object
const mongoose = require("mongoose");


const appointmentSchema = new mongoose.Schema({

    //This is where the layout of the user object will go

});

appointmentSchema.methods.setApointmentRequest = function(start, end, patient, doctor){}

appointmentSchema.methods.aproveRequest = function(appointment, isAproved){}

appointmentSchema.methods.updateAppointment = function(appointment){}

appointmentSchema.methods.updateAppointmentRequest = function(apointment){}

module.exports = mongoose.model("Appointment", appointmentSchema);