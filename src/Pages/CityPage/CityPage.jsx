import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import "./CityPage.scss";
import axios from "axios";
import defaultBG from "../../assets/images/cityBackground.jpg";
// Components
import Loader from '../../Components/Loader/Loader';
const CityPage = () => {
    const {cityname} = useParams();
    const [backgroundImg, setBackgroundImg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // Fetch Background Image
    useEffect(() => {
        fetchImage();
    }, [])
    
    // Handler Functions
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
        </div>
    )
}

export default CityPage