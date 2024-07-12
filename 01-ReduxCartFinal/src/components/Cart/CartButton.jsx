import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../redux/ui-slice';

const CartButton = (props) => {
  const dispatch =useDispatch();
  const cartQuantity =useSelector((state)=>state.cart.totalQuantity)


  const toggleCartHandler =()=>{
    dispatch(uiActions.toggleFn());
  };


  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
