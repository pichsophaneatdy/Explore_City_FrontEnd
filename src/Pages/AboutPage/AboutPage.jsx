import "./AboutPage.scss";
import React from 'react'
import AboutImg from "../../assets/images/hero.jpeg";
import instagram from "../../assets/icons/instagram.png";
import linkedIn from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
const AboutPage = () => {
    return (
        <div className="aboutPage">
            {/* Hero Section */}
            <div className="aboutPage__hero">
                <div className="aboutPage__container">
                    <h1 className="aboutPage__title">I REALLY<br></br> LOVE TO BUILD<br></br> DIGITAL PRODUCT</h1>
                    <div className="aboutPage__connect">
                        <a target="_blank" href="https://www.linkedin.com/in/pichsophaneat/">
                            <img src={linkedIn} alt="" className="aboutPage__icon" />
                        </a>
                        <a target="_blank" href="https://github.com/pichsophaneatdy">
                            <img src={github} alt="" className="aboutPage__icon" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/pichsophaneat/">
                            <img src={instagram} alt="" className="aboutPage__icon" />
                        </a>
                    </div>
                </div>
                <img className="aboutPage__hero-img" src={AboutImg} alt="Portrait" />
            </div>
            <div className="aboutPage__content">
                <p className="aboutPage__name">Pichsophaneat(Neat) Dy</p>
                <p className="aboutPage__position">Developer @ Explore+City.</p>
                <p className="aboutPage__skills">JavaScript | React | Node.js | Express.js | MongoDB | MySQL | SASS | Bootstrap</p>
                <p className="aboutPage__about">
                    If there is one thing I can do all day, it would be programming. It all started when I joined the Model United Nation in New York. It is a point in time where I found my passion of building digital products that potentially makes positive changes in people's lives.
                </p>
                <p className="aboutPage__hobby">Hobby: Hiking, Running, and Coffee</p>
            </div>
        
        </div>
    )
}

export default AboutPage
