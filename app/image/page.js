import Image from "next/image";
import bappaImage from "@/public/assets/images/bappa.png"
import React from "react";
import { roboto } from "../layout";
const ImageOptimization = () => {
  return (
    <div>
      <h1  className={roboto.className}> Next js Image Optimization</h1>
      <div className="flex gap-4">
        <div className="mt-4 border border-emerald-100">
        <h3>1</h3>
          <Image
            src="/assets/images/bappa.png"
            alt="public folder"
            width={500}
            height={50}
          />
        </div>
        {/* <div className="mt-4">
          <Image
            src={bappaImage}
            alt="public folder"
           
          />
        </div> */}
        <div className="mt-4 w-96  border border-emerald-100">
        <h3>2</h3>
          <Image
            src={bappaImage}
            alt="public folder"
           
          />
        </div>
        <div className="mt-4 w-96 h-28 relative overflow-hidden border border-emerald-100">
        <h3>3</h3>
          <Image
          fill
            src={bappaImage}
            alt="public folder"
           
          />
        </div>
        
       
      </div> <br />
      <hr />
      <div className="flex gap-4">
      <h1>remote unknown url</h1>
         <div className="mt-4 w-96 h-28 relative overflow-hidden border border-emerald-100">
                <Image
                    placeholder="blur"
                    fill
                    src={bappaImage}
                    alt="bappa"
                    className="object-cover"
                />
            </div>
      </div>
    </div>
  );
};

export default ImageOptimization;
