const apiKey = "3785190b492cf965ce116da308d16ff0";

async function getWeather(){

    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    const weatherResult =
    document.getElementById("weather-result");

    if(data.cod == 200){

        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;

    } else {

        weatherResult.innerHTML =
        `<p>City not found</p>`;
    }
}
