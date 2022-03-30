//Schema and helper functions for the availability object
const mongoose = require("mongoose");

const User = require("./user");


const availabilitySchema = new mongoose.Schema({

    //This is where the layout of the user object will go
    doctorId: {
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
});


availabilitySchema.methods.updateAppointment = function(start, end) {
    this.startTime = start;
    this.endTime = end;

    return this.save();
}

//All doctor availability
availabilitySchema.static.getDoctorsAvailability = function(start, end) {
    let doctorList = await User.getDoctorsList();

    return this.find({
        doctorId: { in: doctorList },
        startTime: { gte: end },
        endTime: { lte: start }
    });
}

//One doctor availability
availabilitySchema.static.getOneDoctorAvailability = function(doctorId, start, end) {
    return this.find({
        doctorId: doctorId,
        startTime: { gte: end },
        endTime: { lte: start }
    });
}

//Edit Doctor Avalaibility
availabilitySchema.methods.editAvailability = function(start, end) {
    this.startTime = start;
    this.endTime = end;

    return this.save();
}


module.exports = mongoose.model("Availability", availabilitySchema);