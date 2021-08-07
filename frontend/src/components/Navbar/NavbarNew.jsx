import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  return (
    <NavBody>
      <NavBarLogo>
        <h2>Mern Shopping Cart</h2>
      </NavBarLogo>
      <NavBarLinks>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <CartLogoBade>0</CartLogoBade>
            </span>
          </Link>
        </li>
      </NavBarLinks>
      <HamburgerMenu>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
    </NavBody>
  );
}

const NavBody = styled.div`
  width: 100%;
  background-color: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 50;
`;

const NavBarLogo = styled.div`
  h2 {
    color: #f4f4f4;
    font-size: 1.4rem;
    cursor: pointer;
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
      color: #f4f4f4;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
    }
  }
`;

const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    width: 100%;
    height: 3px;
    background: #f4f4f4;
  }

  :hover {
    div {
      background: #dd219e;
    }
  }
`;
