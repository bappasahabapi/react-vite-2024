import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/imgae-data";

export async function GET(request,{params}){
    const photoId =params?.id;

    const data =getPhotoById(photoId);
    return NextResponse.json(data);
   
}