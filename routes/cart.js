const express = require("express");
const router = express.Router();
const { autenticatateJWT } = require("../middlware/authenticator");
const cartController = require("../controllers/cart");

router.post("/add", autenticatateJWT, cartController.addToCartController);

router.post(
  "/add/cart/item",
  autenticatateJWT,
  cartController.addCartItemController
);

router.get("/user", cartController.getUserCart)
router.post("/remove/:userid/:itemid", cartController.removeFromCart)

module.exports = router;
