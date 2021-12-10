const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

// ****** WITH DESTRUCTURING ******

if (!address) {
  console.log("Please provide an address!");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log("Error:", error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log("Location:", location);
      console.log("Forecast:", forecastData);
    });
  });
}

// ****** WITHOUT DESTRUCTURING ******

// if (!address) {
//   console.log("Please provide an address!");
// } else {
//   geocode(address, (error, geoData) => {
//     if (error) {
//       return console.log("Error:", error);
//     }

//     forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
//       if (error) {
//         return console.log("Error:", error);
//       }
//       console.log("Location:", geoData.location);
//       console.log("Forecast:", forecastData);
//     });
//   });
// }
