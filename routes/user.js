const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/get/orders/:userID", userController.findUserOrders);
router.get("/get/authorised/:userID/:courseID", userController.findCourseAuth);

module.exports = router;
