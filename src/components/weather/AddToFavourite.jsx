import HeartIcon from '../../assets/heart.svg'
import RedHeartIcon from '../../assets/heart-red.svg'
import { useContext, useState } from 'react'
import { FavouriteContext } from '../../context'

export default function AddToFavourite() {


  const {favourites, addToFavourite,removeFromFavourites}=useContext(FavouriteContext);
  console.log(favourites);

  const [isFavourtite, setIsFavourite]=useState(false);

  const handleFavourite =()=>{
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
