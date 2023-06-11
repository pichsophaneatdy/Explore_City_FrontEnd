import "./AttractionsList.scss";
import star from "../../../src/assets/avatar/star.png"
import getAttractions from "../../API/getAttractions";
import {useState} from "react";
import axios from "axios";
const AttractionsList = ({list}) => {
    let index = 0;
    const renderStars = (ratings) => {
        const stars = [];
        for (let i = 0; i < ratings ; i++) {
            stars.push(<img className="singleComment__star" key={i} src={star} alt="star"/>)
        }
        return stars;
    }
    // state
    const [activeAttraction, setActiveAttraction] = useState();
    const [detail, setDetail] = useState({});
    const handleClick = (id) => {
        if (id == activeAttraction) {
            setActiveAttraction(null);
            setDetail({});
            return;
        }
        setActiveAttraction(id);
        axios.get(getAttractions.getAttractionsDetail(id))
            .then((response) => {
                setDetail(response.data);
            })
            .catch((error) => console.log(error))
    }
    return (
        <div className="attractions">
            {
                list.map(({properties}) => {
                    index++;
                    return (properties.name !== "" && (
                    <article className="attraction-container">
                        <div className="attraction" onClick={()=>handleClick(properties.xid)}>
                            <div className="attraction__col">
                                <p className="attraction__number">{index.toString().length < 2 ? `0${index}`: index}</p>
                                <div className="attraction__content">
                                    <p className="attraction__name">{properties.name}</p>
                                    {/* Rating */}
                                    <div className="attraction__rating">
                                        {
                                            properties?.rate && renderStars(properties?.rate)
                                        }
                                    </div>
                                </div>
                            </div>
                            <button className="attraction__learn-more">
                                {
                                    properties?.xid == activeAttraction ? "-" : "+"
                                } 
                            </button>
                        </div>
                        {/* Attraction Detail */}
                        {
                            properties?.xid == activeAttraction && detail?.xid && (
                                <div className="attraction__detail">
                                    <img src={detail.preview.source} className="attraction__image" alt={detail.name}/>
                                    <p>Address: {detail.address.city}, {detail.address.city_district}, {detail.address.country}, {detail.address.state}, {detail.address.postcode}, {detail.address.state}</p>
                                    {detail?.url ? (<a href={detail.url} target="__blank" className="attraction__link">Visit website</a>) : (
                                        <a href={detail.wikipedia} target="__blank" className="attraction__link">Wikipedia</a>
                                    )}
                                </div>
                            )
                        }
                    </article>
                    ))
                })
            }
        </div>
    )
}
export default AttractionsList;