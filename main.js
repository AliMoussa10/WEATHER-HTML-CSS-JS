// API ID 
const api = "6d055e39ee237af35ca066f35474e9df";

// API URL 
const base =
    `http://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const description = document.querySelector(".description");

async function checkweather(city) {
    const response = await fetch(base + city + `&appid=${api}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";

    } else {
        var data = await response.json();

        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').textContent = data.main.humidity + '%';
        document.querySelector('.wind').textContent = data.wind.speed + ' km/h';
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        weatherIcon.src = `${icon}`;
        description.textContent = data.weather[0].description;
        document.querySelector('.error').style.display = "none";
        document.querySelector('.weather').style.display = "block";
    }

}

searchBtn.addEventListener('click', () => {

    checkweather(searchBox.value);
})
