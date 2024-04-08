import comments from "@/app/database/comments";

// http://localhost:3000/api/comments

//todo: get all comments 
export async function GET(){
    return Response.json(comments)
}
//todo: create comment 
export async function POST(request){
   const comment =await request.json();
   console.log(comment)
   const newComment ={
    id:comments.length+1,
    text:comment.text
  }
  comments.push(newComment)

  // return Response.json(newComment)
  return new Response(JSON.stringify(newComment),{
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
    statusText:"Comment created successfully"
    
  })


};


  