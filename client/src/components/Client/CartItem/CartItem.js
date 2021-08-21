import React from "react";
import styles from "./CartItem.module.css";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { getLocalStorage } from "../../../helpers/localStorage";

function CartItem({ fileName, productName, productPrice, _id }) {
  const dispatch = useDispatch();
  const remove = () => {
    const userID = getLocalStorage("user")._id;
    dispatch(removeFromCart(userID, { _id }, _id));
    // console.log("DONE");
  };
  return (
    <div className={styles.item__infos}>
      <img src={fileName} text={productName} alt={productName} />
      <h2>{productName}</h2>
      <div className={styles.item__number}>
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
        <h2>{productPrice} DT</h2>
      </div>
      <IconButton style={{ color: "red" }} onClick={remove}>
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default CartItem;
