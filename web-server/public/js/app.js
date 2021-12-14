console.log("Client side JS file is loaded!");

// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("http://localhost:3000/weather?location=boston").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const forecast = document.querySelector(".forecast");
const place = document.querySelector(".location");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  forecast.innerHTML = `<img class="loader" src="./img/loading.gif" alt="Loading...">`;
  place.innerText = "";

  fetch(`http://localhost:3000/weather?location=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          forecast.innerText = data.error;
        } else {
          forecast.innerText = data.forecast;
          place.innerText = data.location;
        }
      });
    }
  );

  //   console.log(location);
});
