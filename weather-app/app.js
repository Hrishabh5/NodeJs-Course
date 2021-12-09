const request = require("request");

const urlWeather =
  "http://api.weatherstack.com/current?access_key=d3b8236409ff9c32c242941566fcd5af&query=37.8267,-122.4233";

request({ url: urlWeather, json: true }, (error, response) => {
  // Setting json: true parsed the body as an Object. So we don't need to parse it on our own.
  const data = JSON.parse(response.body);
  const currentWeatherData = response.body.current;
  console.log(data);
  console.log("*********************************************");
  console.log("*********************************************");
  console.log(data.current);

  /*
    Challenge 1: Print a small forecast to the user
    1. Print: 'It is currently, <temperature> degrees out. The cloud cover is <cloud cover>%.'
    2. Test your work
  */

  console.log(
    currentWeatherData.weather_descriptions[0] + ". It is currently,",
    currentWeatherData.temperature,
    "degrees out. The cloud cover is",
    currentWeatherData.cloudcover,
    "%."
  );
});

/*
  Challenge 2: Print the lat/long for Los Angeles
*/

const urlCoords =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaHJpc2hhYmhjb2RlcyIsImEiOiJja3d5aDIxYjIwOHBkMnJwendwdGgwMHZjIn0.-THoLv181FzzFSQk_ykfnw";

request({ url: urlCoords, json: true }, (error, response) => {
  const coordsData = response.body.features[0]; // for los angeles
  console.log(
    "Latitude:",
    coordsData.center[0],
    "Longitude:",
    coordsData.center[1]
  );
});
