import React, { useState } from "react";
import "./SignUpBody.css";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { signup } from "../../api/auth";
import { getLocalStorage } from "../../helpers/localStorage";

function SignUpBody() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const { username, email, password, password2, successMsg, errorMsg } =
    formData;

  /*******************************************
   *EVENT HANDLE
   *******************************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //clientSide validation

    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      const { username, email, password } = formData;
      const data = { username, email, password };
      setFormData({ ...formData, loading: true });

      signup(data)
        .then((response) => {
          console.log("Axios signup success: ", response);
          setFormData({
            username: "",
            email: "",
            password: "",
            password2: "",
            loading: false,
            successMsg: response.data.successMessage,
          });

          console.log(getLocalStorage())
        })
        .catch((err) => {
          console.log("Axios signup error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  /*******************************************
   *VIEWS
   *******************************************/
  const showSignupForm = () => (
    <form className="signupForm" onSubmit={handleSubmit} noValidate>
      <h3 className="text1">Signup and start Learning!</h3>
      {/* <div className="ligne">—————————————————————————</div> */}
      {/* username */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
          className="form-control"
          name="username"
          value={username}
          type="text"
          placeholder="Username"
          autocomplete="nope"
          onChange={handleChange}
        />
      </div>
      {/* email */}
      <div className="form-group input-group">
        <div className=" input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>

        <input
          className="form-control"
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          autocomplete="nope"
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          className="form-control"
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          autocomplete="new-password"
          onChange={handleChange}
        />
      </div>
      {/* password2 */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          className="form-control"
          type="password"
          name="password2"
          value={password2}
          placeholder="Retype password"
          autocomplete="new-password"
          onChange={handleChange}
        />
      </div>
      {/* signup button */}
      <div className="form-group">
        <button className="btn mt-3 mb-3 w-100 Signupbtn" type="submit">
          Sign up
        </button>
      </div>

      <div className="text2">
        By signing up, you agree to our
        <a href="#"> Terms </a>
        of Use and
        <a href="#"> Privacy Policy.</a>
      </div>

      <div className="text3 mt-5">
        Already have an account ?{" "}
        <a href="/login">
          <strong>Log In</strong>{" "}
        </a>
      </div>
    </form>
  );

  return (
    <div>
      <div className="col mt-sm-5">
        <div className="row justify-content-center">
          <div className="forum_inputs container col-sm-4">
            {successMsg && showSuccessMsg(successMsg)}
            {errorMsg && showErrorMsg(errorMsg)}
            {showSignupForm()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpBody;
