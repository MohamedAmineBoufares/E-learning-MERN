const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/getcourses", adminController.getPayments);
router.post("/alloworder/:orderid", adminController.allowOrder);
router.post("/rejectorder/:orderid", adminController.rejectOrder);
router.post("/add/:userid", adminController.addCourseToUser)

module.exports = router;
