//The logic for doctor Pages
//import Notes model
const Note = require('../models/notes');


exports.getAppointments = (req, res, next) => {
    //console.log('doctors page!!');
    res.render('users/doctor');
};

exports.getNotes = (req, res, next) => {};

exports.addNotes = (req, res, next) => {
    //Initiate with frontend notes
    const text = req.body.text;
    //Connect with notes model
    const note = new Note({
        text: text
    })
    note.save().then((result) => {
        console.log('updated note');
        res.redirect('/users/doctors');
    }).catch(err => {
        console.log(err);
    })
};

exports.editNotes = (req, res, next) => {};

exports.editAvailability = (req, res, next) => {};

exports.setAppointment = (req, res, next) => {};