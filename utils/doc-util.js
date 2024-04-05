export function getDocumentByCategory(docsArray, category){
    return docsArray.filter((doc)=>doc.category === category);
}
export function getDocumentByAuthor(docsArray, author){
    return docsArray.filter((doc)=>encodeURI(doc.author) === author);
}
export function getDocumentByTags(docsArray, tag){
    return docsArray.filter((doc)=>doc.tags.some(inputTag=>inputTag===tag))
}