var weather = {
    keyAPI:"49224bdfe135eb44b0e6cd579c02a2ad",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.keyAPI
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name}  = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure } = data.main;
        const { speed } = data.wind;
        
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".pressure").innerHTML = "Pressure: " + pressure;
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "URL('https://source.unsplash.com/1600x900/? " + name + "')";
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search_bar").value);
    }
};

document
.querySelector(".search button").addEventListener("click", function () {
weather.search();
});

document.querySelector(".search_bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather


