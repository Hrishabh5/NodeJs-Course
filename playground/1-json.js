const fs = require("fs");

// const bufferData = fs.readFileSync("1-json.json");
// const dataJSON = bufferData.toString();
// console.log(dataJSON);
// const data = JSON.parse(dataJSON);
// console.log(data);

/*
const book = {
  title: "Ego Is The Enemy",
  author: "Ryan Holiday",
};

const bookJSON = JSON.stringify(book);

fs.writeFileSync("1 - json.json", bookJSON);


console.log(book.title); // Ego Is The Enemy
console.log(bookJSON.title); // Undefined
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData);
console.log(parsedData.title); // Ego Is The Enemy
*/

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Hrishabh";
data.age = 20;

const newJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", newJSON);
console.log(newJSON);
