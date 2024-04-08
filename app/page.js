import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1 className="text-2xl">
      Hit the url <b><Link href={`http://localhost:3000/api/comments`}>Click to show API  Json Response For Comments</Link></b>
    </h1>
   </div>
  );
}
