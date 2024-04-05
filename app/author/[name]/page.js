import ContentDisplay from '@/app/components/ContentDisplay';
import { getDocuments } from '@/app/lib/doc'
import { getDocumentByAuthor } from '@/utils/doc-util';

const AuthorPage = ({params:{name}}) => {
  const docs=getDocuments();
  const matchedDocuments =getDocumentByAuthor(docs,name)
  return (
    <ContentDisplay id={matchedDocuments[0].id}/>
  )
}

export default AuthorPage

