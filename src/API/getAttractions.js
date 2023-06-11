const getAttractionsList = (lat, lng) => {
    return `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lng}&lat=${lat}&rate=3&limit=20&apikey=${process.env.REACT_APP_OPEN_TRIP_MAP}`
}
const getAttractionsDetail = (xid) => {
    return `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.REACT_APP_OPEN_TRIP_MAP}`
}

export default {getAttractionsDetail, getAttractionsList};