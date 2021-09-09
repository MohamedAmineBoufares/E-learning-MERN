const express = require("express");
const router = express.Router();
const { autenticatateJWT } = require("../middlware/authenticator");
const favController = require("../controllers/favorites");

router.post(
  "/add/favortie/item",
  autenticatateJWT,
  favController.addFavController
);

router.get("/get", favController.getUserFavorite);

module.exports = router;
