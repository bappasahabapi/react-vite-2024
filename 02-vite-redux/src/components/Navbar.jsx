import { useSelector } from "react-redux";
import { CartIcon } from "./icons";

const Navbar = () => {
  // console.log(useSelector((store) => {console.log(store)})); // object
  const amount =useSelector((store)=>store.cart.amount)


  return (
    <nav>
      <div className="nav-center">
        <h3>Redux-Local</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
