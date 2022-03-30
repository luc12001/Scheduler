//The logic for setting up appointments

exports.appointmentRequest = (req, res, next) => {
    const patientName = req.body.patientName;
    const appointmentDate = req.body.appointmentDate;
    const appointmentReason = req.body.appointmentReason;
    const appointmentRequestId = req.body.appointmentRequestId;
    if (!image) {
        return res.status(422).render('users/add-appointment-request', {
            title: 'Appointment Request',
            path: 'users/add-appointment-request',
            editing: false,
            hasError: true,
            appointment: {
                patientName: patientName,
                appointmentDate: appointmentDate,
                appointmentReason: appointmentReason,
                appointmentRequestId: appointmentRequestId
            },
            validationErrors: []
        });
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(422).render('users/add-appointment-request', {
            pagepatientName: 'Add Appointment Request',
            path: 'users/add-appointment-request',
            editing: false,
            hasError: true,
            appointment: {
                patientName: patientName,
                appointmentDate: appointmentDate,
                appointmentReason: appointmentReason,
                appointmentRequestId: appointmentRequestId
            },
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        });
    }


    const appointment = new appointment({
        patientName: patientName,
        appointmentDate: appointmentDate,
        appointmentReason: appointmentReason,
        appointmentRequestId: appointmentRequestId,
        userId: userId
    });
    appointment
        .save()
        .then(result => {
            // console.log(result);
            console.log('Created appointment');
            res.redirect('users/add-appointment-request');
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};

exports.editAppointmentRequest = (req, res, next) => {
    const updatedPatientName = req.body.patientName;
    const updatedAppointmentDate = req.body.appointmentDate;
    const updatedAppointmentReason = req.body.appointmentReason;
    const appointmentRequestId = req.body.appointmentRequestId;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('admin/edit-appointment-request', {
            pageTitle: 'Edit Appointment Request',
            path: '/admin/edit-appointment-request',
            editing: true,
            hasError: true,
            appointment: {
                patientName: updatedPatientName,
                appointmentDate: updatedAppointmentDate,
                appointmentReason: updatedAppointmentReason,
                _id: appointmentRequestId
            },
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        });
    }

    Product.findById(prodId)
        .then(product => {
            if (product.userId.toString() !== req.user._id.toString()) {
                return res.redirect('/');
            }
            product.patientName = updatedPatientName;
            product.appointmentDate = updatedAppointmentDate;
            product.appointmentReason = updatedAppointmentReason;
            return product.save().then(result => {
                console.log('UPDATED APPOINTMENT REQUEST!');
                res.redirect('/admin/edit-appointment-request');
            });
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};