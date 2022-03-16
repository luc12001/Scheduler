const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    appointments: [{
        appointment: {
            type: Object, //date object?? or startTime etc?
            required: true
        },
        startTime: {
            type: Object,
            required: true
        },
        endTime: {
            type: Object,
            required: true
        },
        startDate: {
            type: Object,
            required: true
        },
        endDate: {
            type: Object,
            required: true
        }
    }],
    user: {
        email: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }
});

module.exports = mongoose.model('appointments', orderSchema);