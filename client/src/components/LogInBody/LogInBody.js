import React, { useState, useEffect } from "react";
import "./LogInBody.css";

import google from "../assets/google.svg";

import { Link, useHistory } from "react-router-dom";
import { showErrorMsg } from "../../helpers/message";
import { setAuthentication, isAuthenticated } from "../../helpers/auth";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { signin, signinGoogle, signupGoogle } from "../../api/auth";
import { auth, provider } from "../firebase";
import { getLocalStorage } from "../../helpers/localStorage";

function LogInBody() {
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/feed");
    }
  }, [history]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMsg: false,
    loading: false,
  });

  const { email, password, errorMsg, loading } = formData;

  /****************************
   * EVENT HANDLERS
   ***************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // client-side validation
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };
      setFormData({ ...formData, loading: true });
      signin(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);

          if (isAuthenticated() && isAuthenticated().role === 1) {
            console.log("Redirecting to admin dashboard");
            history.push("/admin/dashboard");
          } else {
            console.log("Redirecting to user dashboard");
            history.push("/");
            console.log(getLocalStorage());
          }
        })
        .catch((err) => {
          console.log("signin api function error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  /*****connect with goole  */

  // Function to Handle the Log-in with google process !

  const logInWithGoogle = (data) => {
    signinGoogle(data)
      .then((response) => {
        setAuthentication(response.data.token, response.data.user);

        console.log("Redirecting to user dashboard");
        console.log(getLocalStorage());
        history.push("/");
      })
      .catch((err) => {
        console.log("signin api function error: ", err);
      });
  };

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then(() => {
      const username = auth.currentUser.displayName;
      const email = auth.currentUser.email;
      const data = { username, email };
      try {
        signupGoogle(data).then(() => {
          logInWithGoogle(data); // DRY
        });
      } finally {
        logInWithGoogle(data); // DRY
      }
    });
  };

  /*******************************************
   *VIEWS
   *******************************************/
  const showSigninForm = () => (
    <form className="signinForm" onSubmit={handleSubmit} noValidate>
      <h3 className="txt1">Welcome Back !</h3>
      {/* email */}
      <div className="form-group input-group">
        <div className=" input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>

        <input
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="form-control"
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
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="form-control"
        />
      </div>

      {/* signin button */}
      <div className="form-group">
        <button className="btn mt-3 mb-3 w-100 Signinbtn" type="submit">
          Log in
        </button>
      </div>

      <p className="or__title">OR</p>
      <button
        className="btn mt-3 mb-3 w-100 login__google"
        onClick={signInWithGoogle}
      >
        <span>
          <img className="mr-5" src={google} width="25" alt="google icon" />
        </span>
        continue with Google
      </button>

      <div className="txt2">
        Don't have an account?{" "}
        <a href="/signup">
          <strong>Sign up</strong>
        </a>
      </div>
    </form>
  );

  return (
    <div className="col mt-sm-5">
      <div className="row justify-content-center">
        <div className="forum_inputs container col-sm-4">
          {errorMsg && showErrorMsg(errorMsg)}
          {showSigninForm()}
        </div>
      </div>
    </div>
  );
}

export default LogInBody;
