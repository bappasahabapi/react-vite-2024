import ContentDisplay from '@/app/components/ContentDisplay'
import React from 'react'

const SubContentPage = ({params:{subContentId}}) => {
  return (
    // <div>{subContentId}</div>
    <ContentDisplay id ={subContentId}/>
  )
}

export default SubContentPage