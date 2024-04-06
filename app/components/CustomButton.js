"use client"

import { useRouter } from "next/navigation";
import React from "react";

export default function CustomButton({children}) {
    const router =useRouter()
    const handleClick =()=>{
        router.push('/dashboard/settings')
    }



  return (
    <button onClick={handleClick} className="bg-violet-300 p-2 rounded mt-3">
     {children}
    </button>
  );
}
