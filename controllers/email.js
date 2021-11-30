const { text } = require("express");
const nodemailer = require("nodemailer");
const { countDocuments } = require("../models/User");

const email = "testing.testing.2k25@gmail.com";
const password = "Test123456789T";

exports.sendEmail = async (req, res) => {
  const { userEmail, emailSubject, emailContent } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email, // generated ethereal user
      pass: password, // generated ethereal password
    },
  });

  const mailOptions = {
    from: email, // sender address
    to: userEmail, // list of receivers
    subject: emailSubject, // Subject line
    text: emailContent, // plain text body
    html: `<b>${emailContent}</b>`, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send(info);
    }
  });
};
