import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems,totalAmount, amount } = useSelector((store) => store.cart);

  const dispatch =useDispatch()

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
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
            total <span>${totalAmount}</span>
          </h4>
        </div>
        <button onClick={()=>dispatch(clearCart())} className='btn clear-btn'>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
