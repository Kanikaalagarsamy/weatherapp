const inputBox = document.querySelector(".inputbox");
const searchBtn = document.getElementById("searchbtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const weather_body = document.querySelector(".weather-body");
async function checkWeather(city) {
    const api_key = "573d92b5ef75e793158233e234734310";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  
    const weather_data = await fetch(`${url}`).then((response) =>
      response.json()
    );
    console.log("run");
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
  
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
  
    switch (weather_data.weather[0].main) {
      case "Clouds":
        weather_img.src = "images/darkcloudy.png";
        break;
      case "Clear":
        weather_img.src = "images/clearcloudy.png";
        break;
      case "Rain":
        weather_img.src = "images/heavyrain.png";
        break;
      case "Mist":
        weather_img.src = "images/haze.png";
        break;
      case "Snow":
        weather_img.src = "images/snowy.png";
        break;
    }
  
    console.log(weather_data);
  }
  searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
  });
