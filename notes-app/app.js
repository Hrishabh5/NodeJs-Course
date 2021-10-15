const yargs = require("yargs");
const getNotes = require("./notes");

// console.log(process.argv);

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note..");
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note..");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all the notes",
  handler: function () {
    console.log("Listing out all the notes..");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading out a note..");
  },
});

console.log(yargs.argv);
