import PhotoDetails from "@/app/components/PhotoDetails";

 const PhotoDetailsPage = ({params: {id,lang}}) => {
  return (
    <PhotoDetails id={id} lang={lang}/>
  )
}

export default PhotoDetailsPage
