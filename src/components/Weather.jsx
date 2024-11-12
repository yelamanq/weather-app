import React, { useMemo } from "react";
import humidityIcon from '../assets/images/humidity.svg'
import windIcon from '../assets/images/wind.svg'
import ForecastList from "./ForecastList";

const Weather = ({weatherInfo, tempUnit, forecastInfo}) => {

    const weatherIcon = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`;
    const desc = weatherInfo.weather[0].description.charAt(0).toUpperCase() + weatherInfo.weather[0].description.slice(1);

    const temp = useMemo(() => {
        if (tempUnit === 'C') {
            const calcTemp = (weatherInfo.main.temp - 273.15).toFixed(1);
            return calcTemp > 0 ? `+${calcTemp} °C` : `${calcTemp} °C`
        }
        else {
            const calcTemp = ((weatherInfo.main.temp - 273.15)*1.8+32).toFixed(1);
            return calcTemp > 0 ? `+${calcTemp} °F` : `${calcTemp} °F`
        }
    }, [tempUnit])

    return (
        <div className="weather">
            <div className="currentWeather">
                <div className="weatherMainInfo">
                    <h1 className="city">
                        <span>{weatherInfo.name}</span>
                        <span style={{ marginLeft: '10px' }}>{temp}</span>
                    </h1>
                    <div className="weatherDescription">
                        <p className="description">{desc}</p>
                        <img src={weatherIcon} className="weatherIcon" alt="" />
                    </div>
                </div>
                <div className="weatherExtraInfo">
                    <div className="extra">
                        <img src={humidityIcon} alt="" className="extraIcon" />
                        <p className="extraText">{weatherInfo.main.humidity}%</p>
                    </div>
                    <div className="extra">
                        <img src={windIcon} className="extraIcon" alt="" />
                        <p className="extraText">{weatherInfo.wind.speed.toFixed(1)} m/s</p>
                    </div>
                </div>
            </div>
            <div className="forecastWeather">
                <ForecastList forecastInfo={forecastInfo} tempUnit={tempUnit} />
            </div>
        </div>
    )
}

export default Weather;