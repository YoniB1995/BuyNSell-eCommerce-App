import styled from "styled-components";
import Products from "../Products/Products";
import "./Homescreen.css";

const HomeScreen = () => {
  return (
    <HomeScreenBody>
      <HomeScreenTitle>Latest Products</HomeScreenTitle>

      <HomeScreenProducts className="homescreen__products">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </HomeScreenProducts>
    </HomeScreenBody>
  );
};

export default HomeScreen;

const HomeScreenBody = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`;

const HomeScreenTitle = styled.h2`
  font-size: 1.5rem;
  color: #171717;
  margin-bottom: 1rem;
  margin-left: 8px;
`;

const HomeScreenProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
