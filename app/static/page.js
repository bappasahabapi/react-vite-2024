import { getCatFacts } from "@/apis/apis";
import Button from "../components/Button";

export default async function StaticPage() {
    const catFacts = await getCatFacts();

    return (
        <div>
            <h1 className="text-yellow-300  ">Static - Prerendered as Static Content</h1>
            <h3>it means it will render at the build time</h3>
            <h4>○  (Static)   prerendered as static content</h4>
            <div className="mt-4">{catFacts.fact}</div>
            <div className="mt-4">
                <li>When we build this page by typeing <code className="text-amber-200 ">npm run build</code> </li>
                <li>○  (Static)   prerendered as static content</li>
               


            </div>

            <div className="mt-8">
                <Button>Click here</Button>
            </div>
        </div>
    );
}
