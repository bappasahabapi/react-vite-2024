import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems,totalAmount, amount } = useSelector((store) => store.cart);

  const dispatch =useDispatch()

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your Cart </h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Cart </h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Total Amount <span>${totalAmount.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={()=>dispatch(openModal())} className='btn clear-btn'>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
