let divClima = document.getElementById("clima");
let ciudad = "Parana"
fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&units=metric&lang=es&appid=e9a7e3cb37d2c507a65850d8eb279783")
    .then ( response => response.json())
    .then ( data => {
        console.log(data)
        divClima.innerHTML = `<span> ${data.name} ${data.main.temp}°C</span>
                                <span> Humedad ${data.main.humidity}% </span>`
    });
