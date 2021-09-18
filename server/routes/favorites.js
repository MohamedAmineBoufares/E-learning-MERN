const express = require("express");
const router = express.Router();
const { autenticatateJWT } = require("../middlware/authenticator");
const favController = require("../controllers/favorites");

router.post(
  "/add",
  autenticatateJWT,
  favController.addFavController
);

router.get("/get", favController.getUserFavorite);
router.post("/remove/:userid/:itemid", favController.removeFromFav);

module.exports = router;
