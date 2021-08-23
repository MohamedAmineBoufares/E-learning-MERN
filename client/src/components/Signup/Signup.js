import React, { useState } from "react";
import styles from "./Signup.module.css";
/* import Head from "next/head"; */
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { signup } from "../../api/auth";
import { useHistory } from "react-router-dom";

const Signup = () => {
  //setFormData c la méthode utilisée pour faire les changements des données for our component state
  //formData : objets contenant les données (username,email... )

  let history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

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
            loadind: false,
            successMsg: response.data.successMessage,
          });
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
    <div className={styles.signup__form} onSubmit={handleSubmit} noValidate>
      <form>
        <h1 className={styles.h1}>Sign Up</h1>
        <div className={styles.content}>
          <div className={styles.input__field}>
            <input
              className={styles.input}
              name="username"
              value={username}
              type="text"
              placeholder="Username"
              autocomplete="nope"
              onChange={handleChange}
            />
          </div>

          <div className={styles.input__field}>
            <input
              className={styles.input}
              name="email"
              value={email}
              type="email"
              placeholder="Email"
              autocomplete="nope"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input__field}>
            <input
              className={styles.input}
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              autocomplete="new-password"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input__field}>
            <input
              className={styles.input}
              type="password"
              name="password2"
              value={password2}
              placeholder="Retype password"
              autocomplete="new-password"
              onChange={handleChange}
            />
          </div>
          <a href="#" className={styles.link}>
            Already have an account ? Sign In
          </a>
          <div className={styles.action}>
            <button className={styles.button}>Sign up</button>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>E-Learning | Sign-up</title>
      </Head> */}

      <div className={styles.left}>
        <h1 className={styles.Text}>Welcome, To our PLateform</h1>
      </div>

      <div className={styles.right}>
        {errorMsg && showErrorMsg(errorMsg)}
        {successMsg && showSuccessMsg(successMsg)}
        {showSignupForm()}
      </div>
    </div>
  );
};
export default Signup;
