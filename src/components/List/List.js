import React, { useState } from 'react';
import {FormControl, InputLabel, MenuItem, Select, Typography,Grid} from '@material-ui/core'
import style from '../List/list.module.css'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = ({places,childClick}) => {
    const [type,setType]=useState('restaurants')
    const [rating,setRating] = useState('')
console.log({childClick})
    return (
        <div className={style.listContainer}>
            <Typography variant="h4" className={style.listTitle}>
                Restaurants, Hotels & Attraction around you
            </Typography>
            <FormControl className={style.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl  className={style.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select  value={rating} onChange={e => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={style.list} >
                {places?.map((item,i) => ( 
                    <Grid item key={i} xs={12} >
                        <PlaceDetails places={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;
