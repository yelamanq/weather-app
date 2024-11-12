import axios from "axios";

export default class WeatherService {
    static async getCurrentWeather(city) {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                appid: '359d2cb633a12f82cc72b666b66d3410',
                q: city,
            }
        })
        return response
    }
    static async getFiveDayForecast(city) {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                appid: '359d2cb633a12f82cc72b666b66d3410',
                q: city,
            }
        })
        return response
    }
}