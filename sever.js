var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, "./FriendFinder/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "./FriendFinder/routing/apiRoutes.js"))(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("localhost:" + PORT)
  });