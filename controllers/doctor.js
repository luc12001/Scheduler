//The logic for doctor Pages
//import Notes model
const Note = require('../models/notes');


exports.getAppointments = (req, res, next) => {
    //console.log('doctors page!!');
    res.render('users/doctor');
};

exports.getNotes = (req, res, next) => {
    res.status(200).json({
        note: [{
            content: "Call Mr Jones"
        }]
    });
};

exports.addNotes = (req, res, next) => {

    const content = req.body.content;

    res.status(201).json({
        message: "Note successfully added",
        note: {
            //id: new Date().toISOString(),
            content: content
        }
    });
    /* const note = new Note({
        content: content,
        //patientId: patientId
    }); */
    /* note.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Note successfully added",
            note: {
                //id: new Date().toISOString(),
                content: result
            },
            /* patientId: {
                ref: "User"
            } */
    /* });
    }).catch(err => {
        console.log(err);
    })

    console.log(res);* */

}

/* const content = req.body.content;
//console.log(content);
//Create in DB
res.status(201).json({
    message: "Note successfully added",
    note: {
        id: new Date().toISOString(),
        content: content
    }
});
console.log(res); */

/* const content = req.body.content;

    const note = new Note({
        content: content,

    });

    //Creat post in DB.
    note
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Post created successfully!',
                note: note,
                 creator: {
                     id: creator.id,
                     //name: creator.name
                 
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

    console.log(note);
};
 */




/*  //Initiate with frontend notes
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
}) */


exports.editNotes = (req, res, next) => {};

exports.editAvailability = (req, res, next) => {
    const doctorId = req.body.doctorId;
    const doctorName = req.body.doctorName;
    const doctorAvailability = req.body.doctorAvailability;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('users/edit-availability', {
            pageTitle: 'Edit Doctor Availability',
            path: 'users/edit-availability',
            editing: true,
            hasError: true,
            availability: {
                doctorName: doctorName,
                doctorAvailability: doctorAvailability,
                _id: doctorId
            },
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        });
    }

    Doctor.findById(doctorId)
        .then(doctor => {
            if (doctor.userId.toString() !== req.user._id.toString()) {
                return res.redirect('/');
            }
            doctor.doctorName = doctorName;
            doctor.doctorNotes = doctorNotes;
            doctor.doctorAvailability = req.body.doctorAvailability;
            return doctor.save().then(result => {
                console.log('UPDATED AVAILABILITY!');
                res.redirect('users/edit-availability');
            });
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};

exports.newAppointment = (req, res, next) => {
    const patientId = req.body.patientId;
    const patientName = req.body.patientName;
    const patientNotes = req.body.patientNotes;
    const appTime = req.body.appTime;
    if (!image) {
        return res.status(422).render('/users/newAppointment', {
            pageTitle: 'Set Appointment',
            path: '/users/newAppointment',
            editing: false,
            hasError: true,
            appointment: {
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
        return res.status(422).render('/users/newAppointment', {
            pageTitle: 'Set Appointment',
            path: '/users/newAppointment',
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

    const newAppointment = new newAppointment({
        patientId: patientId,
        patientName: patientName,
        patientNotes: patientNotes,
        appTime: appTime
    });
    newAppointment
        .save()
        .then(result => {
            console.log('Appointment Set');
            res.redirect('/users/newAppointment');
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};