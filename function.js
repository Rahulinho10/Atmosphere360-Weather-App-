const apiKey = "44b3816f32ee1bb29c911abb86ed20e8";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.addEventListener("DOMContentLoaded", function() {
    const sBox = document.querySelector(".search input");
    const sBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather_icon");

    async function checkWeather(city) {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        
        if(response.status == 404) {
            alert("Enter Correct City Name!!");
        }
        
        
        var data = await response.json();
        console.log(data);

        document.querySelector(".place").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    }

    sBtn.addEventListener("click", function () {
        checkWeather(sBox.value);
    });
});


