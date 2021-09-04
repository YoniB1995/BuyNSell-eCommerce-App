import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("firstName")) {
      setName(localStorage.getItem("firstName").toString());
    }
  }, [name]);

  const sideDrawerClass = ["sidedrawer"];
  show && sideDrawerClass.push("show");

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const LogOutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("cart");
    setName(null);
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        {name ? (
          <>
            <li>
              <span>Welcome {name}</span>
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
              <span>Welcome Guest</span>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/home">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
