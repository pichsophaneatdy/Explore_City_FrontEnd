import countryName from "../data/country";

const getFullCountryName = (alpha2) => {
    return countryName[alpha2];
}

export default getFullCountryName;