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

exports.setAppointment = (req, res, next) => {
    const patientId = req.body.patientId;
    const patientName = req.body.patientName;
    const patientNotes = req.body.patientNotes;
    const appTime = req.body.appTime;
    if (!image) {
        return res.status(422).render('/users/receptionist/setAppointment', {
            pageTitle: 'Set Appointment',
            path: '/users/receptionist/setAppointment',
            editing: false,
            hasError: true,
            product: {
                patientId: patientId,
                patientName: patientName,
                patientNotes: patientNotes,
                appTime: appTime
            }
        });
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(422).render('/users/receptionist/setAppointment', {
            pageTitle: 'Set Appointment',
            path: '/users/receptionist/setAppointment',
            editing: false,
            hasError: true,
            product: {
                patientId: patientId,
                patientName: patientName,
                patientNotes: patientNotes,
                appTime: appTime
            },
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        });
    }

    const newAppointment = new setAppointment({
        patientId: patientId,
        patientName: patientName,
        patientNotes: patientNotes,
        appTime: appTime
    });
    newAppointment
        .save()
        .then(result => {
            console.log('Appointment Set');
            res.redirect('/users/receptionist/setAppointment');
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};