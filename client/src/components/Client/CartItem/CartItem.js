import React from "react";
import styles from "./CartItem.module.css";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cart/cartSlice";

function CartItem({ src, courseName, coursePrice, courseID, quantity }) {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromCart({ courseID }));
    console.log("DONE")
  };
  return (
    <div className={styles.item__infos}>
      <img src={src} text={courseName} alt={courseName} />
      <h2>{courseName}</h2>
      <div className={styles.item__number}>
        <h2>{quantity}</h2>
        <div className={styles.item__number__modifiy}>
          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <RemoveIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.item__price}>
        <h2>{coursePrice} DT</h2>
      </div>
      <IconButton style={{ color: "red" }} onClick={remove}>
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default CartItem;
