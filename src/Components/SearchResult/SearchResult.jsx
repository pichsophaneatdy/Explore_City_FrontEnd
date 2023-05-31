import "./SearchResult.scss";
import getFullCountryName from "../../utils/getFullCountryName";
const SearchResult = ({cities, handleCityClick}) => {
    return (
        <div className="result">
            {
                cities.map((city,i) => {
                let country = getFullCountryName(city.country);
                    return <p 
                            className="result__item" 
                            key={`${city.name},${city.country},${i}`}
                            onClick={()=>handleCityClick(city)}
                        >
                            {city.name}{city.state ? `, ${city.state}` : ""}, {country}
                        </p>
                })
            }
        </div>
    )
}

export default SearchResult