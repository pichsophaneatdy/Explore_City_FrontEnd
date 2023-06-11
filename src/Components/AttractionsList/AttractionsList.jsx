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
    const [detail, setDetail] = useState();
    const handleClick = (id) => {
        setActiveAttraction(id);
        axios.get(getAttractions.getAttractionsDetail(id))
            .then((response) => console.log(response.data))
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
                                + 
                            </button>
                        </div>
                        {/* Attraction Detail */}
                    </article>
                    ))
                })
            }
        </div>
    )
}
export default AttractionsList;