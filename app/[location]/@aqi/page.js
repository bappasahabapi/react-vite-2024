

// http://localhost:3000/current?latitude=23.7389899&longitude=90.3929446

import AQIComponent from "@/app/components/AQIComponent";
import NoLocationInfo from "@/app/components/NoLocationInfo";
import { getResolvedLatLong } from "@/app/lib/location-info";

const AQIPage = async({params:{location},searchParams:{latitude,longitude}}) => {

    const resolved =await getResolvedLatLong(location,latitude,longitude)

    if (resolved) {

        return <AQIComponent lat={resolved.lat} lon={resolved.lon}/>
    }else{
        return <NoLocationInfo/>
    }
};

export default AQIPage;
