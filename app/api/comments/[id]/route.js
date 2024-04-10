import comments from "@/app/database/comments"
import { redirect } from "next/navigation";

//get single comment by id in dynamic route
export async function GET(_request,context){
    const {params}=context;
    const commentId =params.id;
    if(parseInt(commentId) >comments.length){
      redirect("/api/comments")
    }
    console.log(commentId) // sting pai '1'.
    const comment =comments.find(c=>c.id==parseInt(commentId));

    return Response.json(comment)

  }

//update comment by id in dynamic route
export async function PATCH(request,context){
  const updateComment =await request.json()
    const {params}=context;
    const commentId =params.id;
    const commentIndex =comments.findIndex(c=>c.id==parseInt(commentId));

    console.log(commentIndex);
    comments[commentIndex].text=updateComment.text;

    return Response.json(comments[commentIndex])

}
export async function DELETE(_request,context){

    const {params}=context;
    const commentId =params.id;

    const commentIndex =comments.findIndex(c=>c.id==parseInt(commentId));

    const commentToDelete = comments[commentIndex];
    comments.splice(commentIndex,1)

    return Response.json(commentToDelete)

}