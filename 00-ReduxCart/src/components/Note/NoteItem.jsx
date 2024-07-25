/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../redux/todo-slice";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";

const NoteItem = (props) => {



  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>
            {" "}
            <mark> {props.title}</mark>
          </h3>
          <div className={classes.fav}>
            {" "}
            fav
          </div>
        </header>
        <p>{props.text}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default NoteItem;
