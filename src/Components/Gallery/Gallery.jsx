import "./Gallery.scss";
const Gallery = ({images}) => {
    return (
        <div className="gallery__wrapper">
            {
                images.map((image)=> {
                    return <img className="gallery__image" src={image.urls.full} key={image.id} alt={image.alt_description} />
                })
            }
        </div>
    )
}

export default Gallery
