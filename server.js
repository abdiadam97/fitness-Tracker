const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//define port
const PORT = 1108;

//create server instance
const app = express();

//add logger
app.use(logger("dev"));

//add body parser
app.use(express.urlencoded({extended: true})); //recognize string and arays as request data
app.use(express.json()); //recognize json obj as request data

//add public
app.use(express.static("public"));

//connect db
mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParse: true,
    useFindAndModify: true
});

//add routes
app.use(require("./routes/apiroute.js"));
app.use(require("./routes/htmlroute.js"));

//turn on PORT
app.listen(PORT, () => {
    console.log(`App running on post ${PORT}`);
});