'use client'

import Image from "next/image";
import { useSearchParams,useRouter,usePathname } from "next/navigation";
import { useState,useEffect } from "react";

const LocationDetector = () => {
    const [loading,setLoading] = useState(false);

    const searchParams =useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    //get the current location lat and lon value 
    // http://localhost:3000/current?latitude=23.7389396&longitude=90.3929374
    useEffect(()=>{

        setLoading(true);
        const params =new URLSearchParams(searchParams);
       

        //check browser support for geolocation
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                params.set('latitude', position.coords.latitude)
                params.set('longitude', position.coords.longitude)

                setLoading(false)
                router.push(`/current?${params.toString()}`)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pathname,searchParams])



  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
        {
            loading && (
                <>
                    <Image
                        src='/network.gif'
                        alt="loading..."
                        height={500}
                        width={500}
                        className="border rounded-md my-4"
                    />
                    <p className="text-4xl text-center">Detecting Location ...</p>
                    
                </>
            )
        }
    </div>
  )
}

export default LocationDetector