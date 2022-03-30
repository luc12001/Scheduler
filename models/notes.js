//Schema and helper functions for the notes object
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema({

    note: {
        type: String,
        required: true,

    },

    /*  patientId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true
     }, */

});

module.exports = mongoose.model("Notes", notesSchema);