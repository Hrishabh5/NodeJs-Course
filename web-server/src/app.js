const path = require("path");
const express = require("express");

const app = express(); // we are storing the complete express application in "app"
const publicDir = path.join(__dirname, "..", "/public");

// app.com
// app.com/help
// app.com/about
/*
app.get("", (req, res))

-- "" -> (Route) Here we are gonna provide the partial url like "/help", "/about"
-- (req, res) -> This function basically tells what we wanna do when someone visits that route 
-- req -> (request) Contains info about the incoming requests
-- res -> (response) Contains a bunch of methods which will customize what we are gonna send back to the requester
*/

app.use(express.static(publicDir));

// This will never be executed now
// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

app.get("/weather", (req, res) => {
  res.send({
    location: "India",
    age: "Clear!",
  });
});

// listen method starts up the server on port provided as the first argument
app.listen(3000, () => {
  console.log("Server is up on port 3000!");
});
