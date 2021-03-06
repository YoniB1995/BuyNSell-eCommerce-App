import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../../App.css";

export default function Navbar({ click, history }) {
  const [name, setName] = useState("");
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const LogOutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    localStorage.removeItem("cart");
    setName(null);
  };
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setName(localStorage.getItem("email").toString());
    }
  }, [name]);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <NavBody>
      <NavBarLogo>
        <Link to="/" style={{ textDecoration: "none", color: "#f4f4f4" }}>
          <h2>BuyNSell Shopping Market</h2>
        </Link>
      </NavBarLogo>
      <NavBarLinks>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <CartLogoBade>{getCartCount()}</CartLogoBade>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/home">Shop</Link>
        </li>
        <li>
          <Link to="/contactus">
            <i class="fas fa-envelope"></i> Contact Us
          </Link>
        </li>
        {name ? (
          <>
            <li>
              <Link to="/home">Welcome {name}</Link>
            </li>
            <li>
              <Link to="/home" onClick={LogOutUser}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/home">Welcome Guest</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
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
