import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../../Backdrop/Backdrop";
import "../LandingPage.css";
import Navbar from "../Navbar/Navbar";
import LandingSideDrawer from "../SideDrawer/LandingSideDrawer";

const Header = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      {" "}
      <header>
        <Navbar click={() => setSideToggle(true)} />
        <LandingSideDrawer
          show={sideToggle}
          click={() => setSideToggle(false)}
        />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

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
              Welcome to Buy<span class="logo-style">N</span>Sell store
            </h1>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <div class="button">
              <Link
                to="/user"
                style={{ textDecoration: "none", color: "#f4f4f4" }}
              >
                <p>shop now</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
