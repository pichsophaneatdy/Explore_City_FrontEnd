import React, {useState, useEffect} from 'react';
import "./HomePage.scss";
import axios from "axios";
import {useNavigate} from "react-router-dom";
// utils 
import getFullCountryName from '../../utils/getFullCountryName';
// Components
import CountryCard from '../../Components/CountryCard/CountryCard';
import SearchResult from '../../Components/SearchResult/SearchResult';
const HomePage = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState("");
    const [cityResult, setCityResult] = useState([]);
    const [surprise, setSurprise] = useState(false);
    const [loading, setLoading] = useState(false);
    // Fetch 6 Random Countries From the API
    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:8080/api/countries")
            .then((response) => setCountries(response.data))
            .catch((error) => console.log(error));
            setLoading(false);
    }, [surprise])
    // Fetch Cities from User Input
    useEffect(() => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${process.env.REACT_APP_OPENWEATHER}`;
        axios.get(url)
            .then((response) => {
                setCityResult(response.data);
            })
            .catch((error) => console.log(error));
    }, [city])
    // Handle onClick for city search 
    const handleCityClick = (city) => {
        const lat = city.lat.toFixed(2);
        const lng = city.lon.toFixed(2);
        const fullCountryName = getFullCountryName(city.country);
        navigate(`/city/${city.name}/${fullCountryName}/${lat}/${lng}`);
    }
    return (
        <section className="home">
            {/*  Hero section */}
            <div className="hero">
                <h1 className="hero__title">Discover Everything You Need to Know About A City in One Place!</h1>
                <div className="hero__input-wrapper">
                    <input onChange={(e)=>setCity(e.target.value)} value={city} className="hero__input" type="text" placeholder="Search a city"/>
                    {cityResult.length > 0 && city && <SearchResult handleCityClick={handleCityClick} cities={cityResult} />}
                </div>
            </div>
            {/* Service Section */}
            <div className="service">
                <h2 className="service__title">You'll discover..</h2>
                <div className="service__wrapper">
                    <div className="item1">
                        <p className="item__title">Cost of Living</p>
                    </div>
                    <div className="item2">
                        <p className="item__title">Transportation</p>
                    </div>
                    <div className="item3">
                        <p className="item__title">Weather</p>
                    </div>
                    <div className="item4">
                        <p className="item__title">Air Quality</p>
                    </div>
                    <div className="item5">
                        <p className="item__title">Top Attractions</p>
                    </div>
                    <div className="item6">
                        <p className="item__title">What Other People Say About the City</p>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div className="about">
                <div className="about__img">
                    <h2 className="about__title">About the Developer</h2>
                </div>
                <div className="about__content">
                    <h3 className="about__content__title">Hello, This is from the developer.</h3>
                    <p className="about__content__para">I am thrilled to welcome you to our website and provide you with an extraordinary platform to discover and experience the wonders of cities around the world.</p>
                </div>
            </div>
            {/* Randomized Countries */}
            <div className="countries">
                <div className="countries__header">
                    <h2 className="countries__title">Explore Cities in These Countries</h2>
                    <button onClick={()=>setSurprise(!surprise)} className="countries__btn">Surprise Me!</button>
                </div>
                <div className="countries__wrapper">
                    {
                        countries.map((country,i) => {
                            return <CountryCard country={country} key={i} />
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default HomePage