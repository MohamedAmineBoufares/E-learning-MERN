const User = require("../models/User");

exports.addFavController = async (req, res) => {
  User.updateOne(
    { _id: req.query.id },
    { $push: { favortie: req.body } },
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

exports.getUserFavorite = async (req, res) => {
  User.findOne({ _id: req.query.id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.removeFromFav = async (req, res) => {
  console.log("Hello");
  User.updateOne(
    { _id: req.params.userid },
    { $pull: { favortie: { productID: req.params.itemid } } },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
};
