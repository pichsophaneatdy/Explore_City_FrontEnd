import "./Map.scss";
import {useMemo} from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
const Map = () => {
    const {} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP})
    return (
        <div id="map">
            Map
        </div>
    )
}

export default Map
