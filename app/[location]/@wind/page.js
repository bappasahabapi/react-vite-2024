import NoLocationInfo from "@/app/components/NoLocationInfo";
import WindComponent from "@/app/components/WindComponent"
import { getResolvedLatLong } from "@/app/lib/location-info";

const WindPage = async({params:{location},searchParams:{latitude,longitude}}) => {
  // return <WindComponent lat={latitude} lon={longitude}/>
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
} else {
    return <NoLocationInfo />;
}
}

export default WindPage