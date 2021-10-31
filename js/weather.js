const API_KEY = "b299b7576c61f06261b9201676060466";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city");
      const weather = document.querySelector("#weather");
      const temperature = document.querySelector("#temperature");
      city.innerText = `${data.name},`;
      weather.innerText = `${data.weather[0].main}`;
      const ChangeTypeTemp = Math.floor(parseInt(data.main.temp));
      temperature.innerText = `${ChangeTypeTemp}°`;
    });
}
function onGeoFail() {
  alert("i can't found you are location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);
