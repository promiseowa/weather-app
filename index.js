function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  console.log(response.data);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}°C`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function livePosition(position) {
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function geoLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(livePosition);
}

function search(city) {
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function firstSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", firstSubmit);

let button = document.querySelector("#button2");
button.addEventListener("click", geoLocation);

let now = new Date();
let h3 = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h3.innerHTML = `${day} ${hours}:${minutes}`;

function convertToCelcius(event) {
  event.preventDefault();
  let unitElement = document.querySelector("#temp");
  unitElement.innerHTML = 20;
}

function convertToFarenheit(event) {
  event.preventDefault();
  let fahrenheitElement = document.querySelector("#temp");
  fahrenheitElement.innerHTML = 55;
}

search("Abuja");
