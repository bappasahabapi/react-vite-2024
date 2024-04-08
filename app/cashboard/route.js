export async function GET(){
  console.log("Rendering from server...");
  return new Response("welcome from route.js file "
  )
}
