//Schema and helper functions for the apointment object
const mongoose = require("mongoose");


const appointmentSchema = new mongoose.Schema({

    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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

appointmentSchema.methods.setApointmentRequest = function(start, end, patient, doctor) {
    this.endTime = end;
    this.startTime = start;
    this.patientId = patient;
    this.doctorId = doctor;
    this.save()
        .then(result => {
            return true;

        }).catch(error => {
            console.log(error);
            return false;
        });
}

appointmentSchema.methods.approveRequest = function(isApproved) {
    this.approved = isApproved;
    this.save()
        .then(result => {
            return true;

        }).catch(error => {
            console.log(error);
            return false;
        });

}

appointmentSchema.methods.updateAppointment = function(appointment) {}

appointmentSchema.methods.updateAppointmentRequest = function(apointment) {}

module.exports = mongoose.model("Appointment", appointmentSchema);