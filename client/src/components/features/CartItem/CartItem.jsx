import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <CartItemBody>
      <CartItemImg>
        <img src={item.imageUrl} alt={item.name} />
      </CartItemImg>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>

      <CartItemPrice>${item.price}</CartItemPrice>

      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
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
