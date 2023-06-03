import "./Weather.scss";
import React from 'react'
import locateIcon from "../../assets/weather-icons/placeholder.png";
import celcius from "../../assets/weather-icons/weather.png";
// Weather code
// 200: thunderstorm
import thunderstorm from "../../assets/weather-icons/thunderstorm.png";
// 300 - 500: rain
import rain from "../../assets/weather-icons/raining.png";
// 600: snow
import snow from "../../assets/weather-icons/snow.png";
// 700: overcast
import overcast from "../../assets/weather-icons/overcast (1).png";
// ==== 800: clear
import sunny from "../../assets/weather-icons/clear-sky.png";
// > 800: cloudy
import cloudy from "../../assets/weather-icons/cloudy.png";

const getWeatherIcon = (code) => {
    let image;
    if (code < 232) {
        image = thunderstorm;
        return image;
    };
    if (code > 299 && code < 532) {
        image = rain;
        return image;
    };
    if (code > 599 && code < 623) {
        image = snow;
        return image;
    }
    if(code > 700 && code <782) {
        image = overcast;
        return image;
    }
    if (code === 800) {
        image = sunny;
        return image;
    }
    if (code > 800) {
        image = cloudy;
        return image;
    }
}
const getTime = (timestamp) => {
    const newDate = new Date(Number(`${timestamp}000`));
    const date = newDate.toString().split(" ")[4].slice(0,5);
    return date;
}
const Weather = ({currentWeather, cityName}) => {
    // Get temp, min temp, and max temp
    const {temp, temp_max, temp_min} = currentWeather.main;
    return (
        <div className="weather__component">
            <div className="weather__location">
                <img className="weather__locationIcon" src={locateIcon} alt="Location Icon"/>
                <p className="weather__locationText">{cityName}</p>
            </div>
            <div className="weather__info">
                {/* <div className="weather__image">
                    <img className="weather__icon" src={getWeatherIcon(currentWeather?.weather[0]?.id)} alt="weather icon"/>
                    <p className="weather__text">{currentWeather?.weather[0]?.main}</p>
                </div> */}
                <div className="weather__col2">
                    <div className="weather__temp">
                        <h2 className="weather__main-temp">{(temp - 273.15).toFixed(0)}°C</h2>
                        <p className="weather__text">{currentWeather?.weather[0]?.main}</p>
                    </div>
                    <div className="weather__min-max">
                        <p className="weather__min-text">{(temp_min - 273.15).toFixed(0)}°C / {(temp_max - 273.15).toFixed(0)}°C</p>
                    </div>
                </div>
                <div className="weather__col1">
                    <div className="box box1">
                        <div className="box__text">
                            <p className="box__title">Sunrise</p>
                            <p>{getTime(currentWeather.sys.sunrise)} AM</p>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="box__text">
                            <p className="box__title">Sunset</p>
                            <p>{getTime(currentWeather.sys.sunset)} PM</p>
                        </div>
                    </div>
                    <div className="box box3">
                        <div className="box__text">
                            <p className="box__title">Wind speed</p>
                            <p>{getTime(currentWeather.wind.speed)}</p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Weather