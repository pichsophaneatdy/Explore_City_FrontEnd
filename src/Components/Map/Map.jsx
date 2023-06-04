import "./Map.scss";
import {useMemo} from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
const Map = ({lat,lng}) => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP});
    const latitude = Number(lat);
    const longtitude = Number(lng);
    if (!isLoaded) return <p>Loading</p>
    return (
        <div>
            <GoogleMap zoom={10} center={{lat:latitude, lng:longtitude}} mapContainerClassName="map">

            </GoogleMap>
        </div>
    )
}

export default Map
