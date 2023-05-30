import "./CountryCard.scss";

const CountryCard = ({country}) => {
    return (
        <div className="card">
            <div className="card__img-wrapper">
                <div className="card__flag-wrapper">
                    <img src={country?.flags?.png} alt={country?.flags?.alt} className="card__img" />
                    <p className="card__title">{country?.name?.common}</p>
                </div>
            </div>
            <div className="card__content">
                <p className="card__text">Region: {country?.region}</p>
                <p className="card__text">
                    Capital city: 
                    {
                        country?.capital?.map((city)=>(` ${city} `))
                    }
                </p>
                <button className="card__btn">Learn more</button>
            </div>
        </div>
    )
}

export default CountryCard