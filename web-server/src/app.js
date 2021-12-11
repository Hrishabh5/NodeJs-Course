const path = require("path");
const express = require("express");

const app = express(); // we are storing the complete express application in "app"
const publicDir = path.join(__dirname, "..", "/public");

app.use(express.static(publicDir));

app.get("/weather", (req, res) => {
  res.send({
    location: "India",
    age: "Clear!",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000!");
});
