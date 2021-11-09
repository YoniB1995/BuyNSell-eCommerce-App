import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../../Backdrop/Backdrop";
import "../LandingPage.css";
import Navbar from "../Navbar/Navbar";
import LandingSideDrawer from "../SideDrawer/LandingSideDrawer";

const Header = () => {
  return (
    <>
      {" "}
      <header>
        <div id="header-hero">
          <div class="header-bg">
            {" "}
            <img
              src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=761&q=80"
              alt="header-image"
            />{" "}
          </div>
          <div class="header-content">
            <p class="heading-1">
              Biggest eCommerce Shop in the World! Buy & Sell.
            </p>
            <h1>
              Welcome to Buy<span class="logo-style">N</span>Sell store
            </h1>
            <p class="description">
              Welcome to our exclusive new Shop ! <br /> We can let you buy all
              the things that are going to be featured at the best sellers for
              2021!
            </p>

            <div class="button">
              <Link
                to="/home"
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
