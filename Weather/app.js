document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#weather-button')
    button.addEventListener("click", () => {
        const city = document.querySelector("#city").value
        if(city) {
            getCoordinates(city)
        } else {
            alert('Please enter a city name')
        }
    })
})

const getCoordinates = async(city) => {
    try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json&limit=1`)
    const data = await res.json()

    if(data.length > 0) {
        const {lat, lon} = data[0]
        getWeather(lat,lon)
    } else {
        console.log('City has not been found. Try again!')
    }
} catch (err) {
    console.log('Error fetching coordinates', err)
}
}

const getWeather = async(lat, lon) => {
    try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    const data = await res.json()

    if(data.current_weather) {
        displayWeather(data.current_weather)
    } else {
        alert('Weather data not available')
    }
} catch(err) {
    console.log('Error', err)
}
}

const displayWeather = (weatherData) => {
    const temperatureElement = document.querySelector('#temp')
    const conditionElement = document.querySelector('#condition')
    const iconElement = document.querySelector('#icon')

    temperatureElement.textContent = `Temperature: ${weatherData.temperature}°C`;
    conditionElement.textContent = `Condition: ${weatherData.weathercode}`;

    const weatherCode = weatherData.weathercode;
    let iconUrl = '';

    if (weatherCode === 0) {
        iconUrl = 'https://cdn-icons-png.flaticon.com/512/3222/3222691.png';  // Placeholder icon for clear sky
        conditionElement.textContent = 'Clear sky';
    } else if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
        iconUrl = 'https://cdn-icons-png.flaticon.com/512/1163/1163736.png';  // Placeholder icon for cloudy weather
        conditionElement.textContent = 'Cloudy';
    } else if (weatherCode >= 45 && weatherCode <= 48) {
        iconUrl = 'https://cdn-icons-png.flaticon.com/512/514/514240.png';  // Placeholder icon for fog
        conditionElement.textContent = 'Fog';
    } else if (weatherCode >= 51 && weatherCode <= 67) {
        iconUrl = 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png';  // Placeholder icon for rain
        conditionElement.textContent = 'Rain';
    } else if (weatherCode >= 71 && weatherCode <= 86) {
        iconUrl = 'https://cdn-icons-png.flaticon.com/512/414/414866.png';  // Placeholder icon for snow
        conditionElement.textContent = 'Snow';
    } else if (weatherCode >= 95 && weatherCode <= 99) {
        iconUrl = 'https://cdn-icons-png.flaticon.com/512/3104/3104612.png';  // Placeholder icon for thunderstorm
        conditionElement.textContent = 'Thunderstorm';
    } else {
        conditionElement.textContent = 'Unknown';
    }

    // Display the icon if a URL is set
    if (iconUrl) {
        iconElement.src = iconUrl;
        iconElement.style.display = 'block';
    } else {
        iconElement.style.display = 'none';
    }
}
