import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="col mt-5 footer__container">
      <div class="row first__row">
        <div class="col-sm-12 mt-3 d-flex justify-content-center align-items-center navbar-brand">
          <h2>Logo</h2>
        </div>
      </div>

      <div class="row contacts__container">
        <div class="col-sm-12 mt-5 d-flex justify-content-center ">
          <h5>+216 12 34 56 78</h5>
        </div>

        <div class="col-sm-12 d-flex justify-content-center">
          <h5>ghsacademy@contact.com</h5>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-3 mt-5 d-flex justify-content-around mb-4">
          <button
            class="btn bg-light mr-sm-4 fab fa-linkedin-in fa-lg"
            title="Linked-in"
          ></button>

          <button
            class="btn bg-light mr-sm-4 fab fa-facebook-f fa-lg"
            title="Facebook"
          ></button>

          <button
            class="btn bg-light mr-sm-4 fab fa-instagram fa-lg"
            title="Instagram"
          ></button>

          <button
            class="btn bg-light mr-sm-4 fab fa-youtube fa-lg"
            title="Youtube"
          ></button>
        </div>
      </div>
    
      <div class="row">
        <div class="col-sm-12 mt-5 d-flex justify-content-center">
          <h5>© 2021 GHS academy</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
