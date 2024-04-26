import LocationInfo from "../components/LocationInfo";



const LocationPage = async({
    params:{location},
    searchParams:{latitude,longitude}
}) => {
    return <LocationInfo lat={latitude}lon={longitude}/>
    
};

export default LocationPage;