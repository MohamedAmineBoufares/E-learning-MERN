const Orders = require("../models/Orders");
const User = require("../models/User");

exports.getPayments = async (req, res) => {
  Orders.find({ authorised: false }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log("C'est pon");
    }
  });
};

exports.allowOrder = async (req, res) => {
  const orderID = req.params.orderid;
  Orders.updateOne({ _id: orderID }, { authorised: true }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.rejectOrder = async (req, res) => {
  const orderID = req.params.orderid;
  Orders.findOneAndDelete({ _id: orderID }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.addCourseToUser = async (req, res) => {
  const userID = req.params.userid;
  User.updateOne(
    { _id: req.params.userid },
    { $push: { courses: req.body } },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
        console.log("C'est pon");
      }
    }
  );
};
