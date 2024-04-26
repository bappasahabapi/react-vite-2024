import { getLocationData } from "../lib/location-info";
import LocationSwitcher from "./LocationSwitcher";


const LocationInfo = async ({ lat, lon }) => {
    const locationInfo = await getLocationData(lat, lon);

    return (
        <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
            <div>
                <div className="mb-2 flex items-center gap-2">
                    <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
                        {locationInfo?.continent}
                    </h2>
                    <LocationSwitcher />
                </div>
                <p className="text-lg text-[#4ed437] lg:text-xl">
                    {locationInfo?.countryName} | {locationInfo?.city}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#c3d6f8] lg:text-sm">
                    <span>{new Date().toLocaleTimeString()}</span>{" "}
                    <span>{new Date().toDateString()}</span> <br />
                    <small>Developed by Bappa Saha bapi </small>
                </div>
                
            </div>
        </div>
    );
};

export default LocationInfo;
