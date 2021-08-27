import React from "react";

import "../LandingPage.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      {" "}
      <header>
        <Navbar />

        <div id="header-hero">
          <div class="header-bg">
            {" "}
            <img src="./images/FirstLandingImg.jpg" alt="header-image" />{" "}
          </div>
          <div class="header-content">
            <p class="heading-1">
              Biggest eCommerce Shop in the World! Buy & Sell.
            </p>
            <h1>
              Welcome to Buy<span class="logo-style">N</span>Sell unique store
            </h1>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div class="button">
              <p>shop now</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
