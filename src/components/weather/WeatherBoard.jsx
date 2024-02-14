/* eslint-disable no-unused-vars */
import { useContext } from "react";
import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";
import { WeatherContext } from "../../context";

// import {useWeather} from '../../hooks'

export default function WeatherBoard() {
  //testing the hook
  // const {loading,error,weatherData}=useWeather();
  // console.log(weatherData)
  //todo: load data using context
  const { weatherData, loading } = useContext(WeatherContext);
//   console.log(weatherData);

  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {loading.state ? (
            <p>{loading.message}</p>
          ) : (
            <>
              <AddToFavourite />
              <WeatherHeadline />
              <WeatherCondition />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
