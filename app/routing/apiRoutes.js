var comedians = require("../data/comedianfriends")

module.exports =(function(app){

    app.post("/api/survey", function(req, res){
        res.json(req.body)
    });
    app.get("/api/comedianfriends", function (req, res){
        res.json(comedians)
    });
})