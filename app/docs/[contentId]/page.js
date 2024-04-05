import ContentDisplay from "@/app/components/ContentDisplay"
const ContentPage = ({params:{contentId}}) => {
  return (
    // <div > {contentId}</div>
    <ContentDisplay id ={contentId}/>
  )
}

export default ContentPage