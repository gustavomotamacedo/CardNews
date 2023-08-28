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
        this.latitude = `${latitude}`
        this.longitude = `${longitude}`
    }

}

const api = new WeatherApi()

//const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${api.latitude}&lon=${api.longitude}&exclude=${part}&appid=${API key}`