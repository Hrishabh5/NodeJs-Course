const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

console.log(validator.isEmail("hrishabh507@gmail.com"));
console.log(validator.isURL("https:/gmail.com"));
console.log(getNotes());
console.log("npm " + chalk.bold.bgYellow.black("WARN"));
