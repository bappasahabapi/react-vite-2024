/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addItemToCart, removeItemFromCart } from '../../redux/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price ,id} = props.item;
  // console.log(quantity)

  const dispatch =useDispatch();
  const removeCartHandler =()=>{
    dispatch(removeItemFromCart(id))
  };
  const addCartHandler =()=>{
    // dispatch(addItemToCart({
    //   title,
    //   price,
    //   id
    // }))
    const items ={
      title,
      price,
      id
    }
    dispatch(addItemToCart(items))

    
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
