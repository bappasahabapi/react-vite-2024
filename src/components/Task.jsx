/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch } from "../contexts/TaskContext";

export default function Task({ task}) {


  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTaskDispatch();
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "CHANGED",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }


  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "CHANGED",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />

        {taskContent}

        <button onClick={()=>{
          dispatch({
              type:"DELETED",
              id:task.id
            })
        }}>

          Delete
          </button>
      </label>
    </li>
  );
}

