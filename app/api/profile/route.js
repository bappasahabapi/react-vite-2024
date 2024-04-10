import { headers } from "next/headers";

export async function GET(request) {

    const requestHeaders= new Headers(request.headers);
    // console.log(requestHeaders)
    // console.log(requestHeaders.get("Authorization"))
    //todo: alternate  to use next hs headers
    const headerList = headers()
    console.log(headerList.get("Authorization"))
    

    return new Response("Profile Api")
}
