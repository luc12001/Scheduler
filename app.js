const path = require('path');
const express = require("express");
//const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');

const doctorsRoute = require('./routes/doctors');

if (!process.env.PORT) {
    require("dotenv").config();
}

const PORT = process.env.PORT || 3000

/*******************************************
 * Site Startup
 * ****************************************/
const site = express();

const corsOptions = {
    origin: "https://cse341-scheduler.herokuapp.com/",
    optionsSuccessStatus: 200
};
site.use(cors(corsOptions));

const options = {
    family: 4
};
site.use(bodyParser.json());

site.set('view engine', 'ejs');
site.set('views', 'views');

/* site.use(express.static(path.join(__dirname + '/views'))); */

//admin Route
site.use("/admin", adminRoute);

//doctors Route
site.use("/doctors", doctorsRoute);

//Parser
site.use(express.urlencoded());
site.use(express.static(path.join(__dirname, "public")));

/*******************************************
 * Site Router
 * ****************************************/

site.use("/", (request, response, next) => {

    response.write('<html>');
    response.write('<body>');
    response.write("<h1>Work in Progress</h1>");
    response.write('</body>');
    response.write('</html>');
    return response.end();
});



site.listen(PORT);