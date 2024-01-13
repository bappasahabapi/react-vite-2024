const object ={
    name:'bappa',
    age:26
}
//object destructuring allowed same name as object
const {name , age}=object 
console.log(name,age);


const arr =['Mina',26]
//array destructuring  not allowed same name like
const {title , age1}=arr 
console.log(title,age1)




import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
//   let index = 0;
    const [index, setIndex]=useState(0)

  function handleClick() {
    // index = index + 1;
    setIndex(index+1)
  }

  let sculpture = sculptureList[index];
  return (
    <div style={{border:'1px solid gold', padding:'20px'}}>
        <h3>Example-1</h3>
        <p>single state</p>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
}
