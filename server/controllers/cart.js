const User = require("../models/User");
const Orders = require("../models/Orders");

// Controller resonasable for adding a new course to the user
//collection once the user buys a new one

exports.addToCartController = async (req, res) => {
  const orderData = req.body;
  Orders.create(orderData, (err, data) => {
    if (err) {
      console.log("Error adding course...");

      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.addCartItemController = async (req, res) => {
  User.updateOne(
    { _id: req.query.id },
    { $push: { cart: req.body } },
    (err, data) => {
      if (err) {
        console.log("Error adding course...");
        console.log(err);

        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
};

exports.getUserCart = async (req, res) => {
  User.findOne({ _id: req.query.id }, { cart: 1 }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.removeFromCart = async (req, res) => {
  User.updateOne(
    { _id: req.params.userid },
    { $pull: { cart: { _id: req.params.itemid } } },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
};
