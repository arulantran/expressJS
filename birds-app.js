var express = require("express");
var app = express();
const birds = require('./birds')
app.use('/birds', birds)
app.listen(5000);