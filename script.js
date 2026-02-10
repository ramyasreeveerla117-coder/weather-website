const apiKey = "734277741f097e58bd86edd0eb8aa583";

function getWeather() {
    const city = document.getElementById("city").value.trim();
    const btn = document.querySelector("button");

    if (city === "") {
        alert("Enter city name");
        return;
    }

    btn.disabled = true;
    btn.innerText = "Loading...";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                alert(data.message);
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText =
                `🌡 Temperature: ${data.main.temp} °C`;
            document.getElementById("humidity").innerText =
                `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText =
                `🌬 Wind: ${data.wind.speed} m/s`;
            document.getElementById("description").innerText =
                `☁ Weather: ${data.weather[0].description}`;
        })
        .catch(() => {
            alert("Network error");
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerText = "Search";
        });
}
