import WeatherComponent from "@/app/components/WeatherComponent"

const WeatherPage = ({params:{location},searchParams:{latitude,longitude}}) => {
  return <WeatherComponent lat={latitude} lon={longitude}/>
}

export default WeatherPage