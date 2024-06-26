/* eslint-disable react/prop-types */


import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
//   console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
        setTitle('updated')
  };

  return (

    <>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button style={{background:'yellow', padding:'10px',marginLeft:'10px',cursor:'pointer'}} onClick={clickHandler}>Change Title</button>
    </Card>
            
    </>
  );
}

export default ExpenseItem;
