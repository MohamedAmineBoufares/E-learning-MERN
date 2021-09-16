import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import { showErrorMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";
import { setAuthentication, isAuthenticated } from "../../helpers/auth";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { signin, signinGoogle, signupGoogle } from "../../api/auth";
import { auth, provider } from "../firebase";

const Login = () => {
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
            history.push("/user/dashboard");
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

        if (isAuthenticated() && isAuthenticated().role === 1) {
          console.log("Redirecting to admin dashboard");
          history.push("/admin/dashboard");
        } else {
          console.log("Redirecting to user dashboard");
          history.push("/user/dashboard");
        }
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

  /****************************
   * VIEWS
   ***************************/
  const showSigninForm = () => (
    <div className={styles.login__form}>
      <div className={styles.g__signin__button}>
        <div className={styles.logo__wrapper}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google icon"
          />
        </div>
        {/*here*/}
        <div className={styles.text__container}>
          <div onClick={signInWithGoogle}>Login with Google</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <h1 className={styles.h1}>Login</h1>
        <div className={styles.content}>
          <div className={styles.input__field}>
            <input
              name="email"
              value={email}
              className={styles.input}
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input__field}>
            <input
              name="password"
              value={password}
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <p className={styles.link}>
            Don't have an account? <Link to="/signup">Register Here</Link>
          </p>
          <div className={styles.action}>
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  /********************************************* RENDER ********************************************/
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.Text}>Welcome, To our PLateform</h1>
      </div>
      <div className={styles.right}>
        {errorMsg && showErrorMsg(errorMsg)}
        {loading && <div className="text-center pb-4">{showLoading()}</div>}
        {showSigninForm()}
      </div>
    </div>
  );
};

export default Login;
