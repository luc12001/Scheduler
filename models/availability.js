//Schema and helper functions for the availability object
const mongoose = require("mongoose");


const availabilitySchema = new mongoose.Schema({

    //This is where the layout of the user object will go
    doctorId: {
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
});


availabilitySchema.methods.updateAppointment = function(availability){}

//All doctor availability
availabilitySchema.static.getDoctorsAvailability = function(){
    return this.find({});
}

//One doctor availability
availabilitySchema.static.getOneDoctorAvailability = function(doctorId){
    return this.find({
        doctorId: doctorId
    });
}

//Edit Doctor Avalaibility
availabilitySchema.methods.editAvailability = function(availability){
    return this.save();
}


module.exports = mongoose.model("Availability", availabilitySchema);