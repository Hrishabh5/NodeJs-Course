const request = require("request");

const urlWeather =
  "http://api.weatherstack.com/current?access_key=d3b8236409ff9c32c242941566fcd5af&query=37.8267,-122.4233";

// request({ url: urlWeather, json: true }, (error, response) => {
//   if (error) {
//     // low level errors
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find the location!");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] + ". It is currently,",
//       response.body.current.temperature,
//       "degrees out. The cloud cover is",
//       response.body.current.cloudcover,
//       "%."
//     );
//   }
// });

const urlCoords =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaHJpc2hhYmhjb2RlcyIsImEiOiJja3d5aDIxYjIwOHBkMnJwendwdGgwMHZjIn0.-THoLv181FzzFSQk_ykfnw";

request({ url: urlCoords, json: true }, (error, response) => {
  // for los angeles
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.message || response.body.features.length === 0) {
    console.log("Unable to find the location!");
  } else {
    console.log(
      "Latitude:",
      response.body.features[0].center[0],
      "Longitude:",
      response.body.features[0].center[1]
    );
  }
});
