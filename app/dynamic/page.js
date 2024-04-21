import { getCatFacts } from "@/apis/apis";

export default async function StaticPage() {
    const catFacts = await getCatFacts("dynamic");

    return (
        <div>
            <h1>Dynamic - Server-rendered on demand</h1>
            <h3 className="text-yellow-300 ">ƒ  (Dynamic)  server-rendered on demand</h3>
            <h4 className="text-blue-300 " >This is not render on build time it is generate in run time </h4>
            <div className="mt-4">{catFacts.fact}</div>
        </div>
    );
}
