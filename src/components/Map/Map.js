import React from 'react';
import GoogleMapReact from "google-map-react";
import style from "../Map/map.module.css"
import LocatiOnOutLinedIcon, { useMediaQuery } from "@material-ui/core"
const Map = () => {
    const isMoble = useMediaQuery("(min-width:600px)")
    const coordinates={lat:0,lng:0};
    return (
        <div className={style.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:"AIzaSyArBpB4xoCgH98LYg4DB9hTmkhpM35kQ6o"}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                option={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;
