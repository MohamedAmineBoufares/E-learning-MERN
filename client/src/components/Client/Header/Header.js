import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/* import { selectItems } from "../../../features/cart/cartSlice";
import { selectFav } from "../../../features/favorite/favoriteSlice"; */

function Header() {
  /* const items = useSelector(selectItems)
  const itemsFav = useSelector(selectFav) */
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Avatar />
        <p className={styles.p}>Welcome</p>
      </div>

      <div className={styles.right}>
        <Link to="/" className={styles.a}>
          <p>Categories</p>
        </Link>

        <Link to="/login" className={styles.a}>
          <p>Login</p>
        </Link>

        <IconButton>
          <SearchIcon />
        </IconButton>

        <div className={styles.favorite}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>

          <div className={styles.favorite__items}>
            {/* <p>{itemsFav.length}</p> */}
          </div>
        </div>

        <div className={styles.shopping}>
          <Link to="/cart">
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Link>

          <div className={styles.shopping__items}>
            {/* <p>{items.length}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
