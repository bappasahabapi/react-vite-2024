import comments from "@/app/database/comments";

// http://localhost:3000/api/comments

//todo: get all comments 
// export async function GET(){
//     return Response.json(comments)
// };

// if we need query string for search 
export async function GET(request){
  const searchParams =request.nextUrl.searchParams;
  console.log(searchParams)
  const query =searchParams.get('query');
  const page =searchParams.get('page');


  if(query){
    const filteredComments =comments.filter(c=>c.text.toLowerCase().includes(query))
    return Response.json(filteredComments)
  }

  return Response.json(comments)
};


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


  