const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d3b8236409ff9c32c242941566fcd5af&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find the location!", undefined);
    } else {
      const str =
        response.body.current.weather_descriptions[0] +
        ". It is currently, " +
        response.body.current.temperature +
        " degrees out. The cloud cover is " +
        response.body.current.cloudcover +
        "%.";
      callback(undefined, str);
    }
  });
};

module.exports = forecast;
