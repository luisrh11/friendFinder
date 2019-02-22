var friends = require("../app/data/friend");

module.exports = function (app) {
    // home page
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {


        var current = friends[friends.length - 1];
        var userInput = req.body;
        // console.log(current);
        var scores = userInput.input.responses;
        console.log(scores);

        var matchName = "";
        var matchImage = "";
        var totalDifference = 10000;

        for (var i = 0; friends.length > i; i++) {
            var diff = 0;
            for (var j = 0; current.length > j; j++) {
                diff += Math.abs(friends[i].responses[j] - current[j].responses[j]);
            }

            if (diff < totalDifference) {

                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }

        }
        friends.push(userInput);
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
    })
}

