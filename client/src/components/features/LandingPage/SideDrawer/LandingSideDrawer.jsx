import React from "react";
import styled from "styled-components";
import "../../SideDrawer/SideDrawer.css";
import { Link } from "react-router-dom";

const LandingSideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  show && sideDrawerClass.push("show");

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
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
