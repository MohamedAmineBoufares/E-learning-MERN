import React from "react";
import "./Footer.css";

import logoWhite from "../../assets/logo_white.png"

function Footer() {
  return (
    <div className="col mt-5 footer__container">
      <div className="row first__row">
        <div className="col-sm-12 mt-3 d-flex justify-content-center align-items-center navbar-brand">
         <img src={logoWhite} alt="plateform logo" width="150"/>
        </div>
      </div>

      <div className="row contacts__container">
        <div className="col-sm-12 mt-5 d-flex justify-content-center ">
          <h5>+216 12 34 56 78</h5>
        </div>

        <div className="col-sm-12 d-flex justify-content-center">
          <h5>ghsacademy@contact.com</h5>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-3 mt-5 d-flex justify-content-around mb-4">
          <button
            className="btn bg-light mr-sm-4 fab fa-linkedin-in fa-lg"
            title="Linked-in"
          ></button>

          <button
            className="btn bg-light mr-sm-4 fab fa-facebook-f fa-lg"
            title="Facebook"
          ></button>

          <button
            className="btn bg-light mr-sm-4 fab fa-instagram fa-lg"
            title="Instagram"
          ></button>

          <button
            className="btn bg-light mr-sm-4 fab fa-youtube fa-lg"
            title="Youtube"
          ></button>
        </div>
      </div>
    
      <div className="row">
        <div className="col-sm-12 mt-5 d-flex justify-content-center">
          <h5>© 2021 GHS academy</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
