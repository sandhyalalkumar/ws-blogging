const express = require("express");
const chalk = require("chalk");
const debug = require("debug");

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, function(){
    debug(`listening on port ${chalk.green(port)}`);
});