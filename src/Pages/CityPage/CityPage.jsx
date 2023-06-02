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
    const [prices, setPrices] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({id:1});
    // States for weather 
    const [weather, setWeather] = useState({});
    // Fetch Background Image
    useEffect(() => {
        fetchImage();
    }, [])
    const fetchImage = async () => {
        try{
            setIsLoading(true);
            const url = `https://api.unsplash.com/photos/random/?query=${cityname}&orientation=landscape&count=1`;
            const response = await axios.get(url, 
                            {
                                headers: {
                                    "Accept-Version": "v1",
                                    "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                                }
                            });
            setBackgroundImg(response.data[0].urls.full);
        } catch(error) {
            console.log(error);
        } 
    }
    // Fetch Categories
    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
            .then((response) => setCategories(response.data))
            .catch((error) => console.log(error))
    }, [])
        useEffect(() => {
            axios.get(`http://localhost:8080/api/categories/${currentCategory.id}`)
                .then((response) => setPrices(response.data))
                .catch((error) => console.log(error))
        }, [currentCategory]);
    

    // Fetch Weather 
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2c2dc9612e25028339c2e6cb127599bf`)
            .then((response) => console.log(response.data))
            .catch((error)=>console.log(error))
    }, [])
    return (
        <div className="city">
            <section className="city__hero">
                <img onLoad={()=>setIsLoading(false)} className="city__hero__img" src={backgroundImg ? backgroundImg : defaultBG} alt={cityname} />
                <div className="city__hero__content">
                    <h1 className="city__hero__title">Let's discover {cityname}</h1>
                    <button onClick={() => fetchImage()} className="city__hero__btn">Get a new image</button>
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
                        <Weather />
                    </div>
                </div>
                {/* Air Quality */}
                <div className="content__heading">
                        <img className="content__icon" src={AirQualityIcon} alt="Cost"/>
                        <h2 className="content__title">Air Quality</h2>
                    </div>
                {/* Transportation */}
                <div className="content__heading">
                        <img className="content__icon" src={Transportation} alt="Cost"/>
                        <h2 className="content__title">Transportation</h2>
                    </div>
            </section>
        </div>
    )
}

export default CityPage