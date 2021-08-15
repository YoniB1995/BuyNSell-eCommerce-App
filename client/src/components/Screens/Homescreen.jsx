import styled from "styled-components";
import Products from "../Products/Products";
import "./Homescreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductScreen from "./Productscreen";
import { Link } from "react-router-dom";
import "../Products/Product.css";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  return (
    <HomeScreenBody>
      <ProductsFlex>
        <ProductBody>
          <h2>Screens</h2>
          <Link to={`/screens/product`} className="info_button_body">
            <img src="../../images/screens_background.jpg" alt="" srcset="" />
          </Link>
        </ProductBody>
        <ProductBody>
          <h2>Gaming</h2>
          <Link to={`/videogames/product`} className="info_button_body">
            <img src="../../images/gaming_background.jpeg" alt="" srcset="" />
          </Link>
        </ProductBody>
        <ProductBody>
          <h2>Shoes</h2>
          <Link to={`/product/${1111}`} className="info_button_body">
            <img src="../../images/shoes_background.jpeg" alt="" srcset="" />
          </Link>
        </ProductBody>
        <ProductBody>
          <h2>Furniture</h2>
          <Link to={`/product/${1111}`} className="info_button_body">
            <img
              src="../../images/furniture_background.jpeg"
              alt=""
              srcset=""
            />
          </Link>
        </ProductBody>
      </ProductsFlex>
    </HomeScreenBody>
  );
};

export default HomeScreen;

const HomeScreenBody = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
  height: 100%;
  background: #f4f4f4;
`;

const ProductsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductBody = styled.div`
  text-align: center;
  width: 500px;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }

  img {
    height: 400px;
    border-radius: 8px;
  }

  @media (max-width: 1232px) {
    width: 310px;
  }

  @media (max-width: 915px) {
    width: 330px;
  }

  @media (max-width: 705px) {
    width: 380px;
  }
`;
