import React from 'react'
import "./Comment.scss";
const Comment = ({cityname, ratings, setRatings, hover, setHover}) => {
    return (
        <div className="comment">
            <div className="comment__text">
                <p className="comment__city">{cityname}</p>
                <p className="comment__p">Leave a comment here so people can learn more about {cityname} </p>
            </div>
            <form className="comment__form">
                <div className="form__control">
                    <label htmlFor="nickname" className="form__label">Nickname</label>
                    <input id="nickname" type="text" className="form__input" />
                </div>
                <div className="form__control">
                    <label htmlFor="from" className="form__label">Where are you from?</label>
                    <input id="frm" type="text" className="form__input" />
                </div>
                <div className="form__control">
                    <label htmlFor="from" className="form__label">How would you rate {cityname}?</label>
                    <div className="rating">
                        {
                            [1,2,3,4,5].map((start, index) => {
                                index += 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className={index <= (ratings || hover) ? "on" : "off"}
                                        onClick={() =>setRatings(index)}
                                        onMouseEnter={()=>setHover(index)}
                                        onMouseLeave={()=> setHover(ratings)}
                                    >
                                        <span className="star">&#9733;</span>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="form__control">
                    <label htmlFor="comment" className="form__label">Comment</label>
                    <textarea rows="5" id="comment" type="text" className="form__input form__text-area"/>
                </div>
                <div className="form__btn-wrapper">
                    <button className="form__btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Comment
