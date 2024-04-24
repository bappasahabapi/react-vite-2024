import { getLocations } from "./location-utils";

// http://localhost:3000/api/location
export async function GET(){
    const locationData = getLocations();
    return Response.json(locationData)
}