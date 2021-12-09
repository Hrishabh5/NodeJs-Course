const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Place:", data);
  }
});

forecast(37.8267, -122.4233, (error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Forecast:", data);
  }
});
