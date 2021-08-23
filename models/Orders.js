const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  userPhone: String,
  course: [
    {
      courseName: String,
    },
  ],
  authorised: Boolean,
  picRecipient: String,
});

const Orders = mongoose.model("Orders", OrdersSchema)
module.exports = Orders;