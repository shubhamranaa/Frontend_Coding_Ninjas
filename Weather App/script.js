const inputBox = document.querySelector(".input-box");
const searchBtn  = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const loc_not_found = document.querySelector('.location-not-found');
const loc_found = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "c8488919d0bb5ecfa5228a6f6009dcd0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        loc_not_found.style.display = "flex";
        loc_found.style.display = "none"
        console.log('error');
        return;      
    }

    loc_found.style.display = "flex";
    
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'snow':
            weather_img.src = "/assets/snow.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;   
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
