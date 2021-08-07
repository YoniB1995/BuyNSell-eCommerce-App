import styled from "styled-components";
import CartItem from "../CartItem/CartItem";

const CartScreen = () => {
  return (
    <CartScreenBody>
      <CartScreenLeft>
        <h2>Shopping Cart</h2>
        <CartItem />
      </CartScreenLeft>
      <CartScreenRight>
        <CartRightInfo>
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </CartRightInfo>
        <div>
          <button>Proceed to Checkout </button>
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
`;

const CartScreenLeft = styled.div`
  flex: 0.7;
  margin-right: 1rem;
  background-color: transparent;
  padding: 1rem;
`;

const CartScreenRight = styled.div`
  flex: 0.3;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
`;

const CartRightInfo = styled.div``;
