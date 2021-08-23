const Orders = require("../models/Orders");

exports.getPayments = async (req, res) => {
  Orders.find({ authorised: false } , (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log("C'est pon");
    }
  });
};
