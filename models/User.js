const mongoose = require("mongoose"); //bring up mongoose

const UserSchema = new mongoose.Schema( //create new instance : usershema
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      default: "",
    },

    role: {
      type: Number,
      default: 0, //if the role of the user signed up =0 ===> user if role =1 ==> admin user
    },

    cart: [
      {
        productID:String,
        productName: String,
        productPrice: Number,
        productDesc: String,
        productCategory: String,
        fileName: String,
        videoUrl: String,
        previewUrl: String,
      },
    ],

    favortie: [
      {
        productID:String,
        productName: String,
        productPrice: Number,
        productDesc: String,
        productCategory: String,
        fileName: String,
        videoUrl: String,
        previewUrl: String,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
