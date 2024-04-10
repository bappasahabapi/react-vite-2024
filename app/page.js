import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1 className="text-2xl">
      Hit the url <b><Link href={`http://localhost:3000/api/comments`}>Click to show API  Json Response For Comments</Link></b>
    </h1>
    <Link className='text-2xl bg-indigo-200' href="/jfldfjl">Click here to go not found page</Link>
    <Link className='text-2xl bg-indigo-200' href="/product/100/review/5">Click here to go http://localhost:3000/product/100/review/5</Link>
   </div>
  );
}
