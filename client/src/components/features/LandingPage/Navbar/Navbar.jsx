import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../../App.css";
import "../LandingPage.css";

export default function Navbar({ click }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("firstName")) {
      setName(localStorage.getItem("firstName").toString());
    }
  }, []);
  return (
    <NavBody>
      <NavBarLogo>
        <Link to="/" style={{ textDecoration: "none", color: "#f4f4f4" }}>
          <h2>BuyNSell Shopping Market</h2>
        </Link>
      </NavBarLogo>
      <NavBarLinks>
        {!name ? (
          <>
            <li>
              <Link to="/register" className="cart__link">
                <i class="fas fa-user-plus"></i>
                <span>Register</span>
              </Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="/contactus">
                <i class="fas fa-envelope"></i> Contact Us
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/home">
                <i className="fas fa-shopping-cart"></i>Shop
              </Link>
            </li>
            <li>
              <Link to="/login">Welcome {name}</Link>
            </li>
          </>
        )}
      </NavBarLinks>
      <HamburgerMenu onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
    </NavBody>
  );
}

const NavBody = styled.div`
  width: 100%;
  height: 110px;
  background-color: #232f3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 50;
  @media (max-width: 840px) {
    position: fixed;
  }
`;

const NavBarLogo = styled.div`
  h2 {
    color: #f4f4f4;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .linkMainAmoza {
    text-transform: none;
  }
  @media (max-width: 960px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

const CartLogoBade = styled.span`
  width: 30px;
  height: 30px;
  background: #f4f4f4;
  border-radius: 50px;
  margin-left: 8px;
  color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
`;

const NavBarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    padding-left: 1.5rem;
    span {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }
    a {
      text-decoration: none;
      background: #f4f4f4;
      padding: 10px;
      border-radius: 10px;
      color: #171717;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    width: 100%;
    height: 3px;
    background: #f4f4f4;
  }

  @media (max-width: 960px) {
    display: flex;
  }
`;
