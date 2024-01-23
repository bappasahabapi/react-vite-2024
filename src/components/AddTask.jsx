/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTask({onAdd}) {

  const [text,setText]=useState('');

  // const handleChange=(e)=>{
  //   setText(e.target.value)
  // }
  return (
    <div>
      <>
        <input
        placeholder="Add task" 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        // onChange={handleChange}
        />
        <button onClick={()=>{
          onAdd(text)
          setText('')
          }}>Add</button>
      </>
    </div>
  );
}
