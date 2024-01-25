/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch, useTasks } from "../contexts/TaskContext";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {

  const [text,setText]=useState('');
  const tasks =useTasks()
  const dispatch =useTaskDispatch()

  function handleOnAdd(){
    setText('')
    dispatch({
      type:'ADDED',
      id:getNextId(tasks),
      text:text

    })
  }

  return (
    <div>
      <>
        <input
        placeholder="Add task" 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={handleOnAdd}>Add</button>
      </>
    </div>
  );
}
