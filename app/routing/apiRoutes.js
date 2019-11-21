var surveyData = require("../data/surveyData");
var comedianData = require("../data/comedianfriends")

module.exports =(function(app){

    app.get("/api/survey", function(req, res){
        res.json(surveyData)
    });
    app.get("/api/comedianfriends", function (req, res){
        res.json(comedianData)
    });
})