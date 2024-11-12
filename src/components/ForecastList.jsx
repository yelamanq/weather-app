import React from "react";
import { useMemo } from "react";
import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecastInfo, tempUnit }) => {
    return (
        <div className="forecastList">
            {forecastInfo.map((forecast, index) => (
                <ForecastItem forecast={forecast} tempUnit={tempUnit} index={index} />
            ))}
        </div>
    );
};

export default ForecastList;
