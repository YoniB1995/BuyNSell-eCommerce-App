import styled from "styled-components";

const ProductScreen = () => {
  return (
    <ProductScreenBody>
      <ProductScreenLeft>
        <LeftImage>
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="product name"
          />
        </LeftImage>
        <LeftInfo>
          <LeftName>Product 1</LeftName>
          <p>Price: $499.99</p>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam ratione ex quidem asperiores, repellendus atque soluta
            rem eos possimus reprehenderit!
          </p>
        </LeftInfo>
      </ProductScreenLeft>
      <ProductScreenRight>
        <RightInfo>
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cat</button>
          </p>
        </RightInfo>
      </ProductScreenRight>
    </ProductScreenBody>
  );
};

export default ProductScreen;

const ProductScreenBody = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ProductScreenLeft = styled.div`
  display: flex;
  flex: 0.8;
  @media (max-width: 960px) {
    flex-direction: column;
    flex: 1;
  }
`;

const LeftImage = styled.div`
  margin: 1rem;
  flex: 0.6;

  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftInfo = styled.div`
  margin: 1rem;
  flex: 0.4;
  background: #fff;
  height: fit-content;
  font-size: 0.9rem;
  p {
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }

  p:last-child {
    border: none;
  }

  @media (max-width: 960px) {
    flex: 1;
  }
`;
const LeftName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

const RightInfo = styled.div`
  width: 250px;
  margin: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  p {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
  p:last-child {
    border: none;
  }
  button {
    grid-column: 1/-1;
    padding: 10px 16px;
    background: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
  }

  select {
    padding: 10px 16px;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;

const ProductScreenRight = styled.div`
  flex: 0.2;

  @media (max-width: 960px) {
    flex: 1;
    padding: 1rem;
  }
`;
