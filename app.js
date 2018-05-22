const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("ws-blogging");
const bodyParser = require("body-parser");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 9000;
const dbConfig = config.get("dbConfig");

mongoose.connect(dbConfig.mongoUri)
    .then(function(){
    console.log("Successfully connected to the database");    
    }).catch(function(err){
        console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./blogger/routes/blog.routes")(app);

app.listen(port, function(){
    debug(`Server listening on port ${chalk.blue(port)}`);
});