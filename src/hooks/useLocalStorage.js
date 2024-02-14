import { useEffect, useState } from "react"


const useLocalStorage =(storageKey,defaultValue)=>{
    
    // /get value
    const [value,setValue]=useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
    );

    // setValue 
    useEffect(() => {
      
        localStorage.setItem(storageKey, JSON.stringify(value));
    
    
    }, [value,storageKey]);

    return [value,setValue];

}

export default useLocalStorage;