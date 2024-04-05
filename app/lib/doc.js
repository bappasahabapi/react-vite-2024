import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from  "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  //todo 1: go to the docs directory to read the readme files
//   console.log(postsDirectory); 
  // /Users/bappasaha/Desktop/dektop/Backend+Frontend/Target-2024/react-vite-2024/docs

  //todo 2: read the files
  const fileNames = fs.readdirSync(postsDirectory); // [...,]

  const allDocuments = fileNames.map(fileName => {
    const id = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8"); //{..}


    //todo 3: parsing filecontent
    const matterResult =matter(fileContents) //{...}
    // console.log(matterResult.data)

    return {
        id,
        ...matterResult.data
    }

  });

  return allDocuments.sort((a,b)=>{
    if(a.order <b.order){
        return -1
    }
    if(a.order >b.order){
        return 1
    }
    return 0
  });
};

export async function getDocumentContent(id){

  const fullPath =path.join(postsDirectory,`${id}.md`)
  const fileContents =fs.readFileSync(fullPath, "utf8")
  const matterResult =matter(fileContents)

  //todo: Read the content text.
  const processedContent =await remark().use(html).process(matterResult.content)
  const contentHtml =processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

