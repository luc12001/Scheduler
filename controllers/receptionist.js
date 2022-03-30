//The logic for receptionist Pages



exports.cancelAppointment = (req, res, next) => {
    const patientId = req.params.patientId;
    Patient.findById(patientId)
        .then(patient => {
            if (!patient) {
                return next(new Error('Patient not found.'));
            }
            return Patient.deleteOne({
                _id: patientId,
                userId: req.user._id
            });
        })
        .then(() => {
            console.log('DELETED PATIENT INFO');
            res.status(200).json({
                message: 'Success!'
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Deleting patient info failed.'
            });
        });
};

exports.editAppointment = (req, res, next) => {
    const patientId = req.body.patientId;
    const patientName = req.body.patientName;
    const patientNotes = req.body.patientNotes;
    const appTime = req.body.appTime;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('receptionist/edit-appointment', {
            pageTitle: 'Edit Appointment',
            path: '/receptionist/edit-appointment',
            editing: true,
            hasError: true,
            appointment: {
                patientName: patientName,
                patientNotes: patientNotes,
                appTime: appTime,
                _id: patientId
            },
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        });
    }

    Patient.findById(patientId)
        .then(patient => {
            if (patient.userId.toString() !== req.user._id.toString()) {
                return res.redirect('/');
            }
            patient.patientName = patientName;
            patient.patientNotes = patientNotes;
            patient.appTime = appTime;
            return patient.save().then(result => {
                console.log('UPDATED APPOINTMENT!');
                res.redirect('/receptionist/appointments');
            });
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};

exports.setAppointment = (req, res, next) => {
    //console.log('Receptionist page!!');
    res.render('users/receptionist');
};


exports.editDoctorAvailability = (req, res, next) => {
    const patientId = req.body.patientId;
    const doctorId = req.body.doctorId;
    const doctorName = req.body.doctorName;
    const doctorAvailability = req.body.doctorAvailability;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('users/edit-doctor-availability', {
            pageTitle: 'Edit Doctor Availability',
            path: '/receptionist/edit-doctor-availability',
            editing: true,
            hasError: true,
            appointment: {
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
            doctor.doctorAvailability = doctorAvailability;
            return doctor.save().then(result => {
                console.log('UPDATED DOCTOR AVAILABILITY!');
                res.redirect('/users/edit-doctor-availability');
            });
        })
        .catch(err => {
            const error = new Error(err);
            e

            exports.addUser = (req, res, next) => {};

            exports.assignRole = (req, res, next) => {};

            exports.getAllPendingRequests = (req, res, next) => {};

            exports.approveRequest = (req, res, next) => {};

            exports.denyRequest = (req, res, next) => {};
            rror.httpStatusCode = 500;
            return next(error);
        });
};
//return next(error);
//});
//};