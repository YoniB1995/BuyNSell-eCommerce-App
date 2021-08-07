import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  return (
    <CartItemBody>
      <CartItemImg>
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="product name"
        />
      </CartItemImg>
      <Link to={`/product/${111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>

      <CartItemPrice> $499.99</CartItemPrice>

      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </CartItemBody>
  );
};

export default CartItem;

const CartItemBody = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
`;

const CartItemImg = styled.div``;

const CartItemPrice = styled.p`
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;
