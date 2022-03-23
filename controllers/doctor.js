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
    console.log(content);
    //Create in DB
    res.status(201).json({
        message: "Note successfully added",
        note: {
            id: new Date().toISOString(),
            content: content
        }
    });
}

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

exports.editAvailability = (req, res, next) => {};

exports.setAppointment = (req, res, next) => {};