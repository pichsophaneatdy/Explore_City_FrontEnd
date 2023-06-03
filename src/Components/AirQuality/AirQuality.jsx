import React from 'react'
import "./AirQuality.scss";
const AirQuality = ({airQuality}) => {
    console.log(airQuality);
    const {pollutant, concentration, category} = airQuality.aqiInfo;
    return (
        <div className="airQuality">
            <h2 className="airQuality__category">{category}</h2>
            <div className="airQuality__number">
                <h2 className="airQuality__index">{airQuality.AQI} <span className="airQuality__measurement">AQI</span></h2>
                <p className="airQuality__concentration">{pollutant} | {concentration} ug/m<sup>3</sup></p>
            </div>
        </div>
    )
}

export default AirQuality
