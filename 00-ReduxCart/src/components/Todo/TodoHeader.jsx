import classes from './TodoHeader.module.css';


const TodoHeader = (props) => {
  


  return (
    <button className={classes.button}>
      <span style={{content:'center'}}>My Todd Notes</span>
      <span className={classes.badge}>00</span>
    </button>
  );
};

export default TodoHeader;
