/* eslint-disable react/prop-types */

import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider =({children})=>{

    const [favourites, setFavourites]=useLocalStorage('favourites',[]);

    const addToFavourite =(latitude,longitude,location)=>{
        setFavourites([
            ...favourites,
            {latitude:latitude,longitude:longitude,location:location}
        ])
    };
    const removeFromFavourites =(location)=>{
        
            const restFavourites =favourites.filter(
                (fav)=>fav.location !==location
            );

            setFavourites(restFavourites);
        
    };

    return (
        <FavouriteContext.Provider value={{favourites, addToFavourite,removeFromFavourites}}>
        {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider;