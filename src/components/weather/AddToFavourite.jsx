/* eslint-disable no-unused-vars */
import HeartIcon from '../../assets/heart.svg'
import RedHeartIcon from '../../assets/heart-red.svg'
import { useContext, useEffect, useState } from 'react'
import { FavouriteContext, WeatherContext } from '../../context'

export default function AddToFavourite() {


  const {favourites, addToFavourites,removeFromFavourites}=useContext(FavouriteContext);
  const {weatherData}=useContext(WeatherContext);
  const [isFavourtite, setIsFavourite]=useState(false);

  const {latitude,longitude,location}=weatherData;

  useEffect(()=>{
    //current location jodi  local stroage er favorite er modde add thake
    const found =favourites.find((f)=>f.location ===location);
    setIsFavourite(found);
  },[])

  const handleFavourite =()=>{
    const found =favourites.find((f)=>f.location ===location);

    // age the na thaklei add hbe
    if(!found) {
      addToFavourites(latitude,longitude,location)
    }else{
      removeFromFavourites(location)
    }

    setIsFavourite(!isFavourtite)
  };



  return (
    <div className="md:col-span-2">
    <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        onClick={handleFavourite}
        >
            <span>Add to Favourite</span>
            <img src={isFavourtite ? RedHeartIcon :HeartIcon} alt="icon" />
        </button>
        
    </div>
</div>
  )
}
