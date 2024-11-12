import React from "react";
import { useMemo } from "react";
import lowIcon from '../assets/images/low.svg'
import highIcon from '../assets/images/high.svg'

const ForecastItem = ({forecast, tempUnit, index}) => {
    const date = new Date(forecast.dt * 1000);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const time = date.toLocaleTimeString("default", { hour: '2-digit', minute: '2-digit' });
    const weatherIcon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    const desc = forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1);
    
    const temp_min = useMemo(() => {
        if (tempUnit === 'C') {
            const calcTemp = (forecast.main.temp_min - 273.15).toFixed(1);
            return calcTemp > 0 ? `+${calcTemp} °C` : `${calcTemp} °C`
        }
        else {
            const calcTemp = ((forecast.main.temp_min - 273.15)*1.8+32).toFixed(1);
            return calcTemp > 0 ? `+${calcTemp} °F` : `${calcTemp} °F`
        }
    }, [tempUnit])

    const temp_max = useMemo(() => {
        if (tempUnit === 'C') {
            const calcTemp = (forecast.main.temp_max - 273.15).toFixed(1);
            return calcTemp > 0 ? `+${calcTemp} °C` : `${calcTemp} °C`
        }
        else {
            const calcTemp = ((forecast.main.temp_max - 273.15)*1.8+32).toFixed(1);
            return calcTemp > 0 ? `+${calcTemp} °F` : `${calcTemp} °F`
        }
    }, [tempUnit])

    return (
        <div className="forecastItem">
            <h1 className="forecastDate">{month} {day} {time}</h1>
            <div className="forecastDesc">
                <img src={weatherIcon} className="forecastIcon" alt="" />
                <p className="forecastDescText">{desc}</p>
            </div>
            <div className="forecastTemp">
                <div className="tempMinMax">
                    <img src={lowIcon} alt="" className="tempMinMaxIcon" />
                    <p className="tempMinMaxText">{temp_min}</p>
                </div>
                <div className="tempMinMax">
                    <img src={highIcon} alt="" className="tempMinMaxIcon" />
                    <p className="tempMinMaxText">{temp_max}</p>
                </div>
            </div>
        </div>
    );
}

export default ForecastItem;