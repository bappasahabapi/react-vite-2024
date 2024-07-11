/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addItemToCart } from "../../redux/cart-slice";

const ProductItem = (props) => {
  const { title, price, description ,id} = props;
  const dispatch = useDispatch();

  const addToCartHandler =()=>{
    dispatch(addItemToCart({
      id,
      title,
      price,
      
    }))
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>
            {" "}
            <mark> {title}</mark>
          </h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
