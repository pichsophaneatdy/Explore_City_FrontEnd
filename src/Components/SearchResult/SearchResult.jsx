import "./SearchResult.scss";

const SearchResult = ({cities, handleCityClick}) => {
    return (
        <div className="result">
            {
                cities.map((city,i) => {
                    return <p 
                            className="result__item" 
                            key={`${city.name},${city.country},${i}`}
                            onClick={()=>handleCityClick(city)}
                        >
                            {city.name}, {city.state ? city.state : "_ "}, {city.country}
                        </p>
                })
            }
        </div>
    )
}

export default SearchResult