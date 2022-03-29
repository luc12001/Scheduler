//Schema and helper functions for the apointment object
const mongoose = require("mongoose");


const appointmentSchema = new mongoose.Schema({

    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },

    startTime: {
        type: Date,
        required: true
    },

    endTime: {
        type: Date,
        required: true
    },

    approved: Bool

});

appointmentSchema.methods.setApointmentRequest = function(start, end, patient, doctor){}

appointmentSchema.methods.aproveRequest = function(appointment, isAproved){}

appointmentSchema.methods.updateAppointment = function(appointment){}

appointmentSchema.methods.updateAppointmentRequest = function(apointment){}

module.exports = mongoose.model("Appointment", appointmentSchema);