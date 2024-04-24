import { locationData } from "@/app/database/locationData";
// import locarionJsonData from "@/app/database/locationJSONData";


function getLocations() {
    return locationData;
}

function getLocationsByName(locationName) {
    if (!locationName) {
        return null;
    }
    // Corrected the parameter name to 'locationName'
    const foundLocation = locationData.find((item) => item.location.toLowerCase() === locationName.toLowerCase());

    return foundLocation || {url:"The location is not available right now"};

}

// named export
export {
    getLocations,getLocationsByName
} ;

