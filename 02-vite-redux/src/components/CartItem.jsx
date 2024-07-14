/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp} from "./icons";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";


const CartItem = ({ id, img, title, price, amount }) => {

  const dispatch =useDispatch();


  const handleRemove =()=>{
      dispatch(removeItem(id))
  };
  const handleAdd =()=>{
      dispatch(increase({id}))
  };
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button onClick={handleRemove} className='remove-btn'>remove</button>
      </div>
      <div >
        <button className='amount-btn' onClick={handleAdd}>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={()=>dispatch(decrease({id}))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;