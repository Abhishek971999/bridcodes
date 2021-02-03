import React from "react";
import footerImg from "../../images/hero-logo.png";
import { ButtonSecondary } from "../../utls/button/button";
import "./navbar.css";
function Navbar() {
  return (
    <header class="d-flex flex-column justify-content-md-between flex-md-row align-items-center p-3 px-md-4 mb-3 bg-transparent  ">
      <p class="h5 my-0 me-md-auto fw-normal">
        <img src={footerImg} alt="" />
      </p>
      <div className="nav-div">
        <nav class="my-2 my-md-0 me-md-3 justify-content-center">
          <a class="p-2 text-dark navLink" href="#">
            Home
          </a>
          <a class="p-2 text-dark  navLink" href="#">
            Templates
          </a>
          <a class="p-2 text-dark navLink" href="#">
            Price
          </a>
          <a class="p-2 text-dark navLink" href="#">
            Help
          </a>
        </nav>
        <ButtonSecondary text="Get in touch" />
      </div>
    </header>
  );
}

export default Navbar;
