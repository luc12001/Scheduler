const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentRequestSchema = new Schema({
    appointments: [{
        doctorId: {
            type: Schema.Types.ObjectId,
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
        patientId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }]
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
    this.status = isApproved ? "Approved" : "Rejected";
    this.save()
        .then(result => {
            return true;
        }).catch(error => {
            console.log(error);
            return false;
        });

}

appointmentSchema.methods.updateAppointment = function(appointment) {
    this.endTime = appointment.endTime;
    this.startTime = appointment.startTime;
    this.patientId = appointment.patientId;
    this.doctorId = appointment.doctorId;
    this.save()
        .then(result => {
            return true;
        }).catch(error => {
            console.log(error);
            return false;
        });
}

appointmentSchema.methods.updateAppointmentRequest = function(apointment) {
    this.endTime = appointment.endTime;
    this.startTime = appointment.startTime;
    this.patientId = appointment.patientId;
    this.doctorId = appointment.doctorId;
    this.save()
        .then(result => {
            return true;
        }).catch(error => {
            console.log(error);
            return false;
        });
}

appointmentSchema.methods.aproveRequest = function(appointment, isAproved) {}

appointmentSchema.methods.updateAppointment = function(appointment) {}

appointmentSchema.methods.updateAppointmentRequest = function(apointment) {}













module.exports = mongoose.model('appointmentRequests', orderSchema);