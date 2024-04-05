import ContentDisplay from '@/app/components/ContentDisplay';
import { getDocuments } from '@/app/lib/doc'
import { getDocumentByCategory } from '@/utils/doc-util';

const CategoriesPage = ({params:{name}}) => {
  const docs=getDocuments();
  const matchedDocuments =getDocumentByCategory(docs,name)
  return (
    <ContentDisplay id={matchedDocuments[0].id}/>
  )
}

export default CategoriesPage