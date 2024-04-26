import Link from "next/link";
import Card from "./Card";

const NoLocationInfo = () => {
    return <Card>
        <h1>No Location Found</h1>
        <Link className="text-blue-500  " href={`/`}>Back to Home</Link>
    </Card>;
};

export default NoLocationInfo;
