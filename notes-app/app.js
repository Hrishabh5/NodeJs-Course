const validator = require("validator");
const getNotes = require("./notes");

console.log(validator.isEmail("hrishabh507@gmail.com"));
console.log(validator.isURL("https:/gmail.com"));
console.log(getNotes());
