import { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "../features/CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import Paypal from "../features/paypal/Paypal";

const CartScreen = ({ history }) => {
  const [checkout, setCheckOut] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <CartScreenBody>
        <CartScreenLeft>
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </CartScreenLeft>
        <CartScreenRight>
          <CartRightInfo>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </CartRightInfo>
          <div>
            <button
              className="checkoutBtn"
              onClick={() => {
                if (localStorage.getItem("authToken")) {
                  setCheckOut(true);
                } else {
                  alert("Error! User is not registered");
                  history.push("/cart");
                }
              }}
            >
              Proceed to Checkout{" "}
            </button>
            {checkout ? <Paypal items={cartItems} /> : null}
          </div>
        </CartScreenRight>
      </CartScreenBody>
    </>
  );
};

export default CartScreen;

const CartScreenBody = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 2rem auto;

  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1320px) {
    max-width: 900px;
  }

  @media (max-width: 1000px) {
    max-width: 750px;
  }

  @media (max-width: 815px) {
    max-width: 600px;
  }

  @media (max-width: 640px) {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    font-size: larger;
  }
`;

const CartScreenLeft = styled.div`
  flex: 0.7;
  margin-right: 1rem;
  background-color: transparent;
  padding: 1rem;
  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const CartScreenRight = styled.div`
  flex: 0.3;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
  div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
  div:last-child {
    border: none;
  }

  .checkoutBtn {
    padding: 10px 17px;
    width: 100%;
    background: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
  }

  .checkoutBtn:hover {
    opacity: 0.9;
  }

  @media (max-width: 640px) {
    margin: 1rem;
  }
`;

const CartRightInfo = styled.div`
  p {
    padding: 8px;
  }
`;
