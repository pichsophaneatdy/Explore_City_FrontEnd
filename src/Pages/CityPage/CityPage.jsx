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
import Gallery from '../../Components/Gallery/Gallery';
import Comment from '../../Components/Comment/Comment';
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
import GalleryIcon from "../../assets/icons/gallery.png";
import prices from '../../data/prices';
import CommentIcon from "../../assets/icons/comments.png";
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
    // States for Gallery Images
    const [images , setImages] = useState([]);
    // State for comment section
    const [ratings, setRatings] = useState(0);
    const [nickname, setNickname] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");
    const [hover,setHover] = useState(0);
    const [errMsg, setErrMsg] = useState({})
    const [isSuccess, setIsSucess] = useState(false);
    // Fetch Background Image
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const backgroundImg =  await getSingleImage(cityname);
            setBackgroundImg(backgroundImg);
        }
        fetchData();
    }, [])
    // Fetch Images for Gallery Section
    const fetchImages = async() => {
        const images = await getImages(cityname);
        setImages(images);
    }
    useEffect(() => {
        fetchImages();
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
    const handleSubmit = async ({nickname, location, comment}, e) => {
        e.preventDefault();
        // Form Validation 
        const validName = nickname.length > 2;
        const validLocation = location.length > 2;
        const validComment = comment.length > 10;
        // Error
        if(!validName || !validLocation || !validComment) {
            let errorMessage = {};
            if(!validName) {
                errorMessage.nickname = "Please provide a correct nickname (Must be at least 3 characters)";
            }
            if(!validLocation){
                errorMessage.location = "Please provide a correct location (Must be at least 3 characters)";
            }
            if(!validComment){
                errorMessage.comment = "Please provide a correct comment (Must be at least 10 characters)";          
            }
            setErrMsg(errorMessage);
            return;
        }
        // Successful
        setErrMsg({});
        const newComment = {city:cityname,country:countryname, lat, lng, rating: ratings, nickname, location, comment};
        axios.put("http://localhost:8080/api/comment",newComment)
            .then((response) => {
                setIsSucess(true);
                setTimeout(() => setIsSucess(false), 5000);
            })
            .catch((error) => console.log(error));
        setNickname("");
        setLocation("");
        setRatings(0);
        setComment("");
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
                {/* Gallery */}
                <div className="gallery">
                    <div className="content__header gallery__heading">
                        <div className="content__heading">
                            <img className="content__icon" src={GalleryIcon} alt="Gallery"/>
                            <h2 className="content__title">Gallery</h2>
                        </div>
                        <button onClick={()=>fetchImages()} className="countries__btn">Get new images</button>
                    </div>
                    {images?.length > 0 && <Gallery images={images} />}
                </div>
                {/* Comment Section */}
                <div className="comment-section">
                    <div className="content__heading">
                        <img className="content__icon" src={CommentIcon} alt="Cost"/>
                        <h2 className="content__title">Let's leave a comment</h2>
                    </div>
                    <Comment 
                        errMsg={errMsg} 
                        handleSubmit={handleSubmit} 
                        ratings={ratings} 
                        setRatings={setRatings} 
                        hover={hover} 
                        setHover={setHover} 
                        cityname={cityname}
                        nickname={nickname}
                        setNickname={setNickname}
                        location={location}
                        setLocation={setLocation}
                        comment={comment}
                        setComment={setComment}
                        isSuccess={isSuccess}
                    />
                </div>
            </section>
        </div>
    )
}

export default CityPage