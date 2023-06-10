import React, {useState} from 'react'
import "./Comment.scss";
const Comment = ({
        cityname, nickname, setNickname,
        ratings, location, setLocation,
        setRatings, comment, setComment,
        hover, setHover, handleSubmit,
        isSuccess,errMsg}) => {
    return (
        <div className="comment">
            <div className="comment__text">
                <p className="comment__city">{cityname}</p>
                <p className="comment__p">Leave a comment here so people can learn more about {cityname} </p>
            </div>
            {/* Form */}
            <form className="comment__form">
                {/* Success Message */}
                {isSuccess && <p className="for">Successfully uploaded the comment</p>}
                <div className="form__control">
                    <label htmlFor="nickname" className="form__label">Nickname</label>
                    <input value={nickname} onChange={(e)=>setNickname(e.target.value)} id="nickname" type="text" className="form__input" />
                    {errMsg?.nickname?.length > 0 && <p className="form__error">{errMsg.nickname}</p>}                    
                </div>
                <div className="form__control">
                    <label htmlFor="from" className="form__label">Where are you from?</label>
                    <input value={location} onChange={(e)=>setLocation(e.target.value)} id="frm" type="text" className="form__input" />
                    {errMsg?.location?.length > 0 && <p className="form__error">{errMsg.location}</p>}  
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
                    <textarea value={comment} onChange={(e)=>setComment(e.target.value)} rows="5" id="comment" type="text" className="form__input form__text-area"/>
                    {errMsg?.comment?.length > 0 && <p className="form__error">{errMsg.comment}</p>}  
                </div>
                <div className="form__btn-wrapper">
                    <button onClick={(e)=> handleSubmit({nickname, location, comment}, e)} className="form__btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Comment
