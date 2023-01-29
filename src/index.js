let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentTime.getDay()];
let lidate = document.querySelector("#li-date");
lidate.innerHTML = `${currentDay} ${currentTime.getHours()} :${currentTime.getSeconds()} `;

function search(event) {
  event.preventDefault();
  let txts = document.querySelector("#txt-search");
  getCitytemp(txts.value);
}
let schform = document.querySelector("#search-form");
schform.addEventListener("submit", search);

///////
function getCitytemp(Pcity) {
  function showTemperature(response) {
    console.log(response);

    let city = response.data.name;
    let temp = Math.round(response.data.main.temp);
    let humidity = Math.round(response.data.main.humidity);
    let description = response.data.weather[0].description;
    let wind = Math.round(response.data.wind.speed);
    let icon = response.data.weather[0].icon;

    celsiusTemperature = response.data.main.temp;

    let h1 = document.querySelector("h1");
    h1.innerHTML = city;
    let templabel = document.querySelector("#temp");
    templabel.innerHTML = temp;
    let humiditylabel = document.querySelector("#humidity");
    humiditylabel.innerHTML = humidity;
    let descriptionlabel = document.querySelector("#description");
    descriptionlabel.innerHTML = description;
    let windlabel = document.querySelector("#wind");
    windlabel.innerHTML = wind;
    let iconlabel = document.querySelector("#icon");
    iconlabel.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${icon}@2x.png`
    );

    getForecast(response.data.coord);
  }

  let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Pcity}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}
////////////////////Bonus point:
function current(event) {
  //event.preventDefault();

  var longitude;
  var Latitude;
  function showPosition(position) {
    longitude = position.coords.longitude;
    Latitude = position.coords.latitude;
    console.log(
      `Your Latitude is ${longitude} and your longitude is ${Latitude}`
    );
    ///////2
    function showCurrentTemp(response) {
      console.log(response);
      let currentcity = response.data.name;
      getCitytemp(currentcity);
    }

    let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let units = "metric";

    let currentApiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(currentApiurl).then(showCurrentTemp);

    let txts = document.querySelector("#txt-search");
    txts.value = "";
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  getCurrentPosition();
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  ////
  document.querySelector("#datDay1").innerHTML = formatDay(forecast[0].dt);
  document
    .querySelector("#iconDay1")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`
    );
  document.querySelector("#daytempmax1").innerHTML =
    Math.round(forecast[0].temp.max) + "°";
  document.querySelector("#daytempmin1").innerHTML =
    Math.round(forecast[0].temp.min) + "°";

  ////
  ////2
  document.querySelector("#datDay2").innerHTML = formatDay(forecast[1].dt);
  document
    .querySelector("#iconDay2")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${forecast[1].weather[0].icon}@2x.png`
    );
  document.querySelector("#daytempmax2").innerHTML =
    Math.round(forecast[1].temp.max) + "°";
  document.querySelector("#daytempmin2").innerHTML =
    Math.round(forecast[1].temp.min) + "°";

  ////
  ////3
  document.querySelector("#datDay3").innerHTML = formatDay(forecast[2].dt);
  document
    .querySelector("#iconDay3")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${forecast[2].weather[0].icon}@2x.png`
    );
  document.querySelector("#daytempmax3").innerHTML =
    Math.round(forecast[2].temp.max) + "°";
  document.querySelector("#daytempmin3").innerHTML =
    Math.round(forecast[2].temp.min) + "°";

  ////
  ////4
  document.querySelector("#datDay4").innerHTML = formatDay(forecast[3].dt);
  document
    .querySelector("#iconDay4")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${forecast[3].weather[0].icon}@2x.png`
    );
  document.querySelector("#daytempmax4").innerHTML =
    Math.round(forecast[3].temp.max) + "°";
  document.querySelector("#daytempmin4").innerHTML =
    Math.round(forecast[3].temp.min) + "°";

  ////
  ////5
  document.querySelector("#datDay5").innerHTML = formatDay(forecast[4].dt);
  document
    .querySelector("#iconDay5")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${forecast[4].weather[0].icon}@2x.png`
    );
  document.querySelector("#daytempmax5").innerHTML =
    Math.round(forecast[4].temp.max) + "°";
  document.querySelector("#daytempmin5").innerHTML =
    Math.round(forecast[4].temp.min) + "°";

  ////
  ////6
  document.querySelector("#datDay6").innerHTML = formatDay(forecast[5].dt);
  document
    .querySelector("#iconDay6")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${forecast[5].weather[0].icon}@2x.png`
    );
  document.querySelector("#daytempmax6").innerHTML =
    Math.round(forecast[5].temp.max) + "°";
  document.querySelector("#daytempmin6").innerHTML =
    Math.round(forecast[5].temp.min) + "°";

  ////

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let btncurrent = document.querySelector("#current");
btncurrent.addEventListener("click", current);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);
getCitytemp("paris");
