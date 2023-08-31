// URL https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

class WeatherApi {
    latitude
    longitude

    constructor() {
        this.getLocation()
    }

    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => this.setPosition(position.coords.latitude, position.coords.longitude))
        } else {
            return "Seu navegador não suporta geolocalização!"
        }
    }

    setPosition(latitude, longitude) {
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        this.latitude = parseFloat(latitude)
        this.longitude = parseFloat(longitude)
    }

    get latitude() {
        return this.latitude
    }

    get longitude() {
        return this.longitude
    }

    set latitude(latitude) {
        this.latitude = latitude
    }

    set longitude(longitude) {
        this.longitude = longitude
    }

}

const api = new WeatherApi()


setTimeout(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${api.latitude}&longitude=${api.longitude}&daily=weathercode,precipitation_sum&current_weather=true&timezone=auto&forecast_days=1`
    console.log(url)
    fetch(url)
        .then((response) => response.json)
        .then((responseJson) => responseJson.toString)
        .then((results) => console.log(results))
}, 5000)
