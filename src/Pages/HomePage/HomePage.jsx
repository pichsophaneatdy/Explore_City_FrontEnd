import React, {useState} from 'react';
import "./HomePage.scss";

const HomePage = () => {
    const [city, setCity] = useState("");
    return (
        <section className="home">
            <div className="hero">
                <h1 className="hero__title">Discover Everything You Need to Know About A City in One Place!</h1>
                <div className="hero__input-wrapper">
                    <input className="hero__input" type="text" placeholder="Search a city"/>
                </div>
            </div>
        </section>
    )
}

export default HomePage