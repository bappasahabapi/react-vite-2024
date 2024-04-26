import Image from "next/image";
import Card from "./Card";
import { getTemperatureData } from "../lib/weather-info";

const TemperatureComponent = async ({ lat, lon }) => {
    const { temp, feels_like,humidity } = await getTemperatureData(lat, lon);

    return (
        <Card>
            <h6 className="feature-name text-center">Current Temperature</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icon_tempareture.png"
                    alt="rain icon"
                    width={80}
                    height={80}
                />
                <h3 className="feature-title">{temp}°C</h3>

                <p className="feature-name">Feels Like <span className=" text-yellow-300">{feels_like}</span> °C</p>
                <p className="feature-name">Humidity<span className=" text-gray-300 "> {humidity}</span> °C</p>
                
            </div>
        </Card>
    );
};

export default TemperatureComponent;
