const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

console.log(getNotes());
console.log("npm " + chalk.bgRed.black("ERR"));
