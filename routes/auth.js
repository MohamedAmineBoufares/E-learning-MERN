const express = require("express");
const router = express.Router();

const {
  signupValidator,
  signinValidator,
  validatorResult,
} = require("../middlware/validator");

const {
  signupController,
  signinController,
  signupWithGoogleController,
  signinWithGoogleController,
} = require("../controllers/auth");

router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signin", signinValidator, validatorResult, signinController);

// With Google
router.post("/signupgoogle", signupWithGoogleController);
router.post("/signingoogle", signinWithGoogleController);

module.exports = router;
