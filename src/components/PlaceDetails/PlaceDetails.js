import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography} from "@material-ui/core"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import style from "./placeDetails.module.css"
import { Rating } from '@mui/material';
const PlaceDetails = ({places}) => {
    // console.log(places.photo.images.small.url)
    return (
        <Card elevation={6}>
            <CardMedia
            style={{height:300}}
            image={places.photo ? places.photo.images.large.url :'https://www.happyeater.com/images/default-food-image.jpg'}
            title={places.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5">{places.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                <Rating  value={Number(places.rating)} readOnly/>
                  
                    <Typography gutterBottom variant="subtitle1"
                      className={style.subtitle1}>out of {places.num_reviews} reveiws</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">price</Typography>
                    <Typography gutterBottom variant="subtitle1"
                      className={style.subtitle1}>{places.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1"   className={style.subtitle1}>{places.ranking}</Typography>
                </Box>

                {
                    places?.award?.map(item => (
                        <Box>
                            <img src={item.images.small} alt={item.display_name} />
                            <Typography vairant="subtitle2" color="textSecondary"
                          >{item.display.name}</Typography>
                        </Box>
                    ))
                }

                {
                    places?.cuisine?.map(({name}) =>(
                        <Chip key={name} size="small" label={name} className={style.chip}/>
                    ))
                }

                {
                    places?.address && (
                        <Typography gutterBottom variant='subtitle2' color="textSecondary"
                        className={style.subtitle}>
                            <LocationOnIcon/> {places.address}
                        </Typography>
                    )
                }
                {
                    places?.phone && (
                        <Typography gutterBottom variant='subtitle2' color="textSecondary"
                        className={style.subtitle}>
                            <LocalPhoneIcon/> {places.phone}
                        </Typography>
                    )
                }
                <CardActions>
                    <Button size="small" color="primary" onClick={()=> window.open(places.web_url,'_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={()=> window.open(places.website,'_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;
