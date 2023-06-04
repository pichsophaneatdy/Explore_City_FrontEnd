import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import "./CityPage.scss";
import axios from "axios";
import defaultBG from "../../assets/images/cityBackground.jpg";
// Components
import Loader from '../../Components/Loader/Loader';
import MenuAccordion from '../../Components/MenuAccordion/MenuAccordion';
import Weather from "../../Components/Weather/Weather";
import Table from '../../Components/Table/Table';
import AirQuality from '../../Components/AirQuality/AirQuality';
import Map from "../../Components/Map/Map";
// Function 
import {getSingleImage, getImages} from "../../API/getImagesUnsplash";
// Data 
import Prices from "../../data/prices";
import Categories from "../../data/categories";
// Icons
import CostIcon from "../../assets/icons/costIcon.png";
import WeatherIcon from "../../assets/icons/weatherIcon.png";
import AirQualityIcon from "../../assets/icons/airQualityIcon.png";
import Transportation from "../../assets/icons/transportationIcon.png";
import prices from '../../data/prices';
const CityPage = () => {
    const {cityname, countryname, lat, lng} = useParams();
    const [backgroundImg, setBackgroundImg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // States for Categories Section
    const [categories, setCategories] = useState(Categories);
    const [prices, setPrices] = useState(Prices);
    const [currentCategory, setCurrentCategory] = useState({id:1});
    // States for weather 
    const [currentWeather, setCurrentWeather] = useState({});
    // States for air quality
    const [airQuality, setAirQuality] = useState()
    // Fetch Background Image
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const backgroundImg =  await getSingleImage(cityname);
            setBackgroundImg(backgroundImg);
        }
        fetchData();
    }, [])
    useEffect(() => {
        const fetchData = async() => {
            const images = await getImages(cityname);
            console.log(images);
        }
        fetchData();
    }, [])
    // Fetch Categories
    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/categories")
    //         .then((response) => setCategories(response.data))
    //         .catch((error) => console.log(error))
    // }, [])
    //     useEffect(() => {
    //         axios.get(`http://localhost:8080/api/categories/${currentCategory.id}`)
    //             .then((response) => setPrices(response.data))
    //             .catch((error) => console.log(error))
    //     }, [currentCategory]);
    

    // Fetch Weather 
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHER}`)
            .then((response) => {setCurrentWeather(response.data);})
            .catch((error)=>console.log(error))
    }, [])
    // Fetch Air Quality 
    const option = {
        method: 'GET',
        url: 'https://api.ambeedata.com/latest/by-lat-lng',
        params: {lat: lat, lng: lng},
        headers: {'x-api-key': process.env.REACT_APP_AMBEE, 'Content-type': 'application/json'}
    };
    useEffect(() => {
        axios.request(option)
            .then((response) => {setAirQuality(response.data.stations[0]);})
            .catch((error) => console.log(error));
    }, [])
    // Handler
    const handleChangeImage = () => {
        const fetchData = async () => {
            setIsLoading(true);
            const newBackgroundImg = await getSingleImage(cityname);
            setBackgroundImg(newBackgroundImg);
        }
        fetchData();
    }
    return (
        <div className="city">
            <section className="city__hero">
                <img onLoad={()=>setIsLoading(false)} className="city__hero__img" src={backgroundImg ? backgroundImg : defaultBG} alt={cityname} />
                <div className="city__hero__content">
                    <h1 className="city__hero__title">Let's discover {cityname}</h1>
                    <button onClick={() => handleChangeImage()} className="city__hero__btn">Get a new image</button>
                    {isLoading && <Loader />}
                </div>  
            </section>
            <section className="city__content">
                {/* Cost of Living */}
                <div className="cost">
                    <div className="content__heading">
                        <img className="content__icon" src={CostIcon} alt="Cost"/>
                        <h2 className="content__title">Cost of Living</h2>
                    </div>
                    <div className="cost__wrapper">
                        <div className="cost__menu">
                        <MenuAccordion setCurrentCategory={setCurrentCategory} categories={categories} />
                        </div>
                        <div className="cost__content">
                            {prices && <Table items={prices} />}
                        </div>
                    </div>
                </div>
                {/* Weather */}
                <div className="weather">
                    <div className="content__heading">
                        <img className="content__icon" src={WeatherIcon} alt="Cost"/>
                        <h2 className="content__title">Weather</h2>
                    </div>
                    <div className="weather__content">
                        {currentWeather.id ? <Weather cityName={cityname} currentWeather={currentWeather}/> : <Loader />}
                    </div>
                </div>
                {/* Air Quality */}
                <div className="air">
                    <div className="content__heading">
                        <img className="content__icon" src={AirQualityIcon} alt="Cost"/>
                        <h2 className="content__title">Air Quality</h2>
                    </div>
                        {airQuality?.AQI ? <AirQuality airQuality={airQuality}/> : <p className="unavailable__text">No available data</p>}
                </div>
                
                {/* Transportation */}
                <div className="map-section">
                    <div className="content__heading">
                        <img className="content__icon" src={Transportation} alt="Cost"/>
                        <h2 className="content__title">Explore the city</h2>
                    </div>
                    <Map lat={lat} lng={lng} />
                </div>
                
            </section>
        </div>
    )
}

export default CityPage