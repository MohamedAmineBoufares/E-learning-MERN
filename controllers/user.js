const User = require("../models/User");
const Orders = require("../models/Orders");
const Product = require("../models/Product");

exports.findUserOrders = async (req, res) => {
  const userID = req.params.userID;

  const foundOrder = await Orders.find(
    { userID: userID, authorised: true },
    { course: 1 },
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

exports.findCourseAuth = async (req, res) => {
  const userID = req.params.userID;
  const courseID = req.params.courseID;

  Orders.find(
    {
      userID: userID,
      course: { $elemMatch: { courseID: courseID } },
    },
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
