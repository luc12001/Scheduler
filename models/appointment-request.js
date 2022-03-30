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
    const db = getDb();
    let dbOp;
    if (this._id) {
        // Update the product
        dbOp = db
            .collection('products')
            .updateOne({ _id: this._id }, { $set: this });
    } else {
        dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });

}

appointmentSchema.methods.aproveRequest = function(appointment, isAproved) {}

appointmentSchema.methods.updateAppointment = function(appointment) {}

appointmentSchema.methods.updateAppointmentRequest = function(apointment) {}
module.exports = mongoose.model('appointmentRequests', orderSchema);