
import { getDictionary } from "./dictionaries/disctionaries";

// context.params.lang
export default async function Home({params:{lang}}) {
  const dictionary = await getDictionary(lang)
  return (
   <div>
    <h1>
      Photo Gallary {dictionary.follow}
      
    </h1>
    
   </div>
  );
}
