//Schema and helper functions for the notes object
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema({

    note: {
        type: String,
        required: true
            /* noteId: {
                type: Schema.Types.ObjectId,
                required: true
            } */
    }

    //This is where the layout of the user object will go

});

module.exports = mongoose.model("Notes", notesSchema);