import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../SideDrawer/SideDrawer.css";
import { Link } from "react-router-dom";

const LandingSideDrawer = ({ show, click }) => {
  const [name, setName] = useState("");
  const sideDrawerClass = ["sidedrawer"];
  show && sideDrawerClass.push("show");

  useEffect(() => {
    if (localStorage.getItem("firstName")) {
      setName(localStorage.getItem("firstName").toString());
    }
  }, []);

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links landingsidedrawer" onClick={click}>
        {name ? (
          <>
            <li>
              <span>Welcome {name}</span>
            </li>
            <li>
              <Link to="/home">
                <i class="fas fa-shopping-cart"></i>
                <span>To Shop</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <i class="fas fa-user-check"></i>
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-user-plus"></i>
                <span>Register</span>
              </Link>
            </li>
          </>
        )}
        <li>
          <a href="#summer-collection">
            <i class="fas fa-angle-double-right"></i>
            <span>Classic</span>
          </a>
        </li>
        <li>
          <a href="#products">
            <i class="fas fa-angle-double-right"></i>
            <span>On Demand</span>
          </a>
        </li>
        <li>
          <a href="#blog">
            <i class="fas fa-angle-double-right"></i>
            <span>Our Customers</span>
          </a>
        </li>
        <li>
          <a href="#partners">
            <i class="fas fa-angle-double-right"></i>
            <span>Our Partners</span>
          </a>
        </li>
        <li>
          <Link to="/">
            <i class="fas fa-address-card"></i>
            <span>AboutMe</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingSideDrawer;
