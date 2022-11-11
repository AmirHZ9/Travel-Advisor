import React from 'react';
import GoogleMapReact from "google-map-react";
import style from "../Map/map.module.css"
import  { useMediaQuery,Paper, Typography } from "@material-ui/core"
import LocatiOnOutLinedIcon from "@material-ui/icons/LocationOnOutlined"
import { Rating } from '@mui/material';
const Map = ({setCoordinates,setBounds,places,setChildClick}) => {

    const isDesktop = useMediaQuery("(min-width:600px)")
    const coordinates={lat:0,lng:0};
    return (
        <div className={style.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:"AIzaSyAsGEDjPnPb4Yz3NVpZYzVvWjszB62E41k"}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                option={''}
                onChange={e => {
                    setCoordinates({lat: e.center.lat,lng:e.center.lng})
                    setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
                }}
                onChildClick={(child) => setChildClick(child)}
            >
                {places?.map((place,i) => (
                    <div
                     className={style.markerContainer}
                     lat={Number(place.latitude)}
                     lng={Number(place.longitude)}
                     key={i}
                     >
                         {
                             !isDesktop ? (
                                 <LocatiOnOutLinedIcon color="primary" fontSize="large"/>
                             ) :(
                                 <Paper elevation={3} className={style.paper}>
                                         <Typography className={style.typography}>
                                             {place.name}
                                         </Typography>
                                         <img  className={style.pointer }src={place.photo? place.photo.images.large.url : "https://www.happyeater.com/images/default-food-image.jpg"} alt={places.name} />
                                         <Rating size="small" value={Number(place.rating)} readOnly/>
                                 </Paper>
                             )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
