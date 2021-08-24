const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  userPhone: String,
  userID: String,
  course: [
    {
      courseID: String,
      courseName: String,
    },
  ],
  authorised: Boolean,
  picRecipient: String,
  total: Number,
});

const Orders = mongoose.model("Orders", OrdersSchema);
module.exports = Orders;
