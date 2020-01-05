//Creating the "path" to server.js
var path = require('path');

//gets request for html
module.exports = function (app) {


//Connection to allow user to see pages
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // If no matching route is found default to home
    app.use("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};