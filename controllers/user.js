const User = require("../models/User");
const Orders = require("../models/Orders");
const Product = require("../models/Product");

const addCourseToUser = async (courseArray, userID) => {
  console.log(courseArray);
  courseArray.map(({ courseID }) => {
    try {
      const foundCourse = Product.findOne({ _id: courseID }, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
          console.log("C'est pon");
        }
      });

      const courseInfos = {
        productName: foundCourse.productName,
        productID: foundCourse._id,
        fileName: foundCourse.fileName,
      };

      try {
        const addCourseToUser = User.updateOne(
          { id: userID },
          { $push: { courses: courseInfos } },
          (err, data) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(data);
              console.log("C'est pon");
            }
          }
        );
      } catch (error) {
        console.log("Try 2");
      }
    } catch (error) {
      console.log("Eroor Try 1");
    }
  });
};

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
  console.log(foundOrder);
  //   addCourseToUser(foundOrder.course, userID);
};
