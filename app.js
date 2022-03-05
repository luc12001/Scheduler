const express = require("express");
const cors = require('cors');

if(!process.env.PORT){
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

site.use("/", (request, response, next) => {

    response.write('<html>');
    response.write('<body>');
    response.write("<h1>Work in Progress</h1>");
    response.write('</body>');
    response.write('</html>');
    return response.end();
});



site.listen(PORT);