import { getLocationsByName } from "../location-utils";

// http://localhost:3000/api/location/dhaka
//Dynamic routes
export async function GET(request,{params}){
    // console.log(_request)
    const locationDataByName =await getLocationsByName(params?.name);
    return Response.json(locationDataByName);
}