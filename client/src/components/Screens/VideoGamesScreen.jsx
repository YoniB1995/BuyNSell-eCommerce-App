import styled from "styled-components";
import Products from "../features/Products/Products";
import "../Screens/Homescreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const VideoGamesScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  return (
    <>
      <HomeScreenTitle>Latest Products</HomeScreenTitle>

      <HomeScreenProducts className="homescreen__products">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </HomeScreenProducts>
    </>
  );
};

export default VideoGamesScreen;

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
