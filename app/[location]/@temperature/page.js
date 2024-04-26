import TemperatureComponent from "@/app/components/TemperatureComponent"

const TemperaturePage = ({params:{location},searchParams:{latitude,longitude}}) => {
  return <TemperatureComponent lat={latitude} lon={longitude}/>
}

export default TemperaturePage