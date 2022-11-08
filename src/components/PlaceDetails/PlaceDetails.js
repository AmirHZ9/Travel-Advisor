import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@material-ui/core"
const PlaceDetails = ({places}) => {
    // console.log(places.photo.images.small.url)
    return (
        <Card elevation={6}>
            <CardMedia
            style={{height:300}}
            image={places.photo ? places.photo.images.large.url :''}
            title={places.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5">{places.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">price</Typography>
                    <Typography gutterBottom variant="subtitle1">{places.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{places.ranking}</Typography>
                </Box>

                {
                    places?.award?.map(item => (
                        <Box>
                            <img src={item.images.small} alt={item.display_name} />
                            <Typography vairant="subtitle2" color="textSecondary">{item.display.name}</Typography>
                        </Box>
                    ))
                }
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;
