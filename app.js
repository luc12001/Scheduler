const path = require('path');
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoDBSessions = require("connect-mongodb-session")(session);

//Models
const notes = require('./models/notes');
const User = require("./models/user");

//Routes
const receptionRoute = require('./routes/receptionists');
const doctorsRoute = require('./routes/doctors');



/*******************************************
 * Site Initialization
 * ****************************************/

if (!process.env.PORT) {
    require("dotenv").config();
}

const PORT = process.env.PORT || 3000

const site = express();

//MongoDB session storage
const storage = new MongoDBSessions({
    uri: process.env.MONGODB_URI,
    collection: "sessions"
});

//Site otions
const corsOptions = {
    origin: "https://cse341-scheduler.herokuapp.com/",
    optionsSuccessStatus: 200
};
site.use(cors(corsOptions));

const options = {
    family: 4
};

//Parser
site.use(bodyParser.json());
site.use(express.static(path.join(__dirname, "public")));

//Session initializer
site.use(session({
    secret: process.env.SESSIONKEY,
    resave: false,
    saveUninitialized: false,
    store: storage
}));

//Allow for cross server client access
site.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


site.set('view engine', 'ejs');
site.set('views', 'views');

/*******************************************
 * Site Session/Default variables initialization
 * ****************************************/

//Getting user from the session's user ID
site.use((req, res, next) => {
    if (!req.session.userId) {
        req.user = null;
        return next();
    }

    User.findById(req.session.userId)
        .then(foundUser => {
            // I do it this way so that req.user does exist still
            if (!foundUser) {
                req.user = null;
            } else {
                req.user = foundUser;
            }
            next();
        }).catch(error => {
            console.log("Error in finding the user in the database.");
            console.log(error);
            req.user = null;
            return next();
        });

});

/*******************************************
 * Site Routing
 * ****************************************/

/* site.use(express.static(path.join(__dirname + '/views'))); */

//admin Route
site.use("/receptionists", receptionRoute);

//doctors Route
site.use("/doctors", doctorsRoute);


/*******************************************
 * Site Router
 * ****************************************/

site.use("/", (req, res, next) => {

    res.write('<html>');
    res.write('<body>');
    res.write("<h1>Work in Progress</h1>");
    res.write('</body>');
    res.write('</html>');
    return res.end();
});



//site.listen(PORT);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(result => {
        console.log("Connected to Database");
        site.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });