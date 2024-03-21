var express = require("express");
var app = express();
app.get("/", function (req, res) {
   res.send("Welcome to Express Server Page");
});
app.get("/home", function (req, res) {
   res.send("Welcome to Express Server Home Page");
});
app.listen(5000);
