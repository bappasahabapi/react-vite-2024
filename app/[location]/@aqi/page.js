

// http://localhost:3000/current?latitude=23.7389899&longitude=90.3929446

import AQIComponent from "@/app/components/AQIComponent";

const AQIPage = ({params:{location},searchParams:{latitude,longitude}}) => {
    return <AQIComponent lat={latitude} lon={longitude}/>
};

export default AQIPage;
