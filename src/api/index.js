import axios from "axios"
const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

 export const getPlacesData =async (sw,ne)=>{
    try{
        const {data: {data}} = await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'a3fb86b69fmshe2dabb852bf09f0p142e8fjsncd4d183f9837',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })
        return data
    }catch(error){
        console.log(error)
    }
 }

