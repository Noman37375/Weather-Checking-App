const inputBox = document.querySelector("input");
const search = document.getElementById("searchBtn");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind_speed");
const weather_img = document.querySelector('.weather_img')
const Location_not_found = document.querySelector(".location_not_found")
const weather_body = document.querySelector(".weather_body")
const body=document.querySelector("body")
const card=document.querySelector(".card")
search.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

function checkWeather(city) {
  const api_key = "42c85a8613a9fd223619fa603fb7fae4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  fetch(url)
    .then(response => response.json())
    .then(weather_data => {
      if (weather_data.cod === "404") {
        Location_not_found.style.display = "flex";
        weather_body.style.display = "none"
        card.style.background="#e6f5fb"
        body.style.background="white"

        return weather_data;
      }
      else {
        Location_not_found.style.display = "none";
        weather_body.style.display = "flex"
        card.style.background=""
        body.style.background=""
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        windSpeed.innerHTML = `${weather_data.wind.speed} Km/H`;
        console.log(weather_data);

        switch (weather_data.weather[0].main) {
          case 'Clouds':
            weather_img.src = "images/clouds.png";
            break;
          case 'Clear':
            weather_img.src = "images/clear.png";
            break;
          case 'Wind':
            weather_img.src = "images/wind.png";
            break;
          case 'Rain':
            weather_img.src = "images/rain.png";
            break;
          case 'Snow':
            weather_img.src = "images/snow.png";
            break;
          case 'Smoke':
            weather_img.src = "images/smoke.png";
            break;
          case 'Sun':
            weather_img.src = "images/sunrise.png";
            break;
          case 'Haze':
            weather_img.src = "images/haze.png";
            break;
          case 'Thunderstorm':
            weather_img.src = "images/thunderstorm.png";
            break;
          case 'Storm':
            weather_img.src = "images/storm.png";
            break;
          case 'Night':
            weather_img.src = "images/night.png";
            break;
          case 'Moon':
            weather_img.src = "images/moon.png";
            break;
          case 'Sunset':
            weather_img.src = "images/sunset.png";
            break;
          case 'Raindrop':
            weather_img.src = "images/raindrop.png";
            break;
          case 'Windy':
            weather_img.src = "images/windy.png";
            break;
        }
      }
    });
}