
import { useState } from 'react';

export default function Todo() {

    const [todo,setTodo]=useState('')
    const [warning,setWarning]=useState('')


    const handleChangeInput = (e) => {

        const newTextValue = e.target.value;
        const warning = newTextValue.includes('.js')
            ? 'This is functional component hook'
            : null;

        //update state handle here [this change the new todo and warning value]
      setTodo(newTextValue);
      setWarning(warning)
    }


    return (
        <div>
            <hr />
            <p style={{ backgroundColor: 'yellow' }}>{todo}</p>
            <textarea 
            placeholder='.js includes in text'
            name='text' 
            value={todo} 
            onChange={handleChangeInput} />
            <h3> {warning || 'Good Choice :)'} </h3>
            <hr />
        </div>
    )
}