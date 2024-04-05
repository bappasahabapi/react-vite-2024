import ContentDisplay from '@/app/components/ContentDisplay';
import { getDocuments } from '@/app/lib/doc'
import { getDocumentByTags } from '@/utils/doc-util';


const TagsPage = ({params:{name}}) => {
  const docs=getDocuments();
  const matchedDocuments =getDocumentByTags(docs,name)
  // console.log(matchedDocuments[0].id)
  return (
    <ContentDisplay id={matchedDocuments[0].id}/>
  )
}

export default TagsPage