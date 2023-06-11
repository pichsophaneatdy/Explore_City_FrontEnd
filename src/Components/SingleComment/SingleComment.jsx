import "./SingleComment.scss";
// Import Avatar
import bear from "../../assets/avatar/bear.png";
import cat from "../../assets/avatar/cat.png";
import chicken from "../../assets/avatar/chicken.png";
import dog from "../../assets/avatar/dog.png";
import panda from "../../assets/avatar/panda.png";
import rabbit from "../../assets/avatar/rabbit.png";
import star from "../../assets/avatar/star.png";
// Get random avatar
const getAvatar = () => {
    const avatars = [bear, cat, chicken, dog, panda, rabbit];
    const index = Math.floor(Math.random() * avatars.length)
    return avatars[index];
}
// Component
const SingleComment = ({singleComment}) => {
    singleComment.avatar = getAvatar();
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < singleComment.rating ; i++) {
            stars.push(<img className="singleComment__star" key={i} src={star} alt="star"/>)
        }
        return stars;
    }
    return (
        <div className="singleComment">
            <div className="singleComment__avatar">
                <img className="avatar" src={singleComment.avatar} alt="Avatar"/>
            </div>
            <div className="singleComment__content">
                <div className="singleComment__col1">
                    <p className="singleComment__text singleComment__name">{singleComment?.nickname}</p>
                    <div className="singleComment__dot"></div>
                    <p className="singleComment__text singleComment__location">from {singleComment?.location}</p>
                </div>
                {
                    singleComment.rating !== 0 &&
                    (<div className="singleComment__rating">
                        {renderStars()}
                    </div>)
                }
                
                <div className="singleComment__col2">
                    <p className="singleComment__text singleComment__comment">{singleComment?.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleComment
