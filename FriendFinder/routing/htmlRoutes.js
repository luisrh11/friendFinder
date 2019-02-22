var path = require("path");

    module.exports= function(app){
        // home page
        app.get("/", function(req, res){
            res.sendFile(path.join(__dirname, "../public/home.html"));
            // console.log(res);
        })
        // survey page
        app.get("/survey", function(req, res){
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        })
    }