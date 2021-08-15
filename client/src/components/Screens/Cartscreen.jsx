import styled from "styled-components";
import CartItem from "../CartItem/CartItem";

const CartScreen = () => {
  return (
    <CartScreenBody>
      <CartScreenLeft>
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </CartScreenLeft>
      <CartScreenRight>
        <CartRightInfo>
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </CartRightInfo>
        <div>
          <button className="checkoutBtn">Proceed to Checkout </button>
        </div>
      </CartScreenRight>
    </CartScreenBody>
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
