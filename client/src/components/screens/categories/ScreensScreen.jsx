import styled from "styled-components";
import Products from "../../features/Products/Products";
import "../Homescreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllScreens as listProducts } from "../../../redux/actions/productActions";
import {
  HomeScreenBody,
  HomeScreenProducts,
  HomeScreenTitle,
  SideBarToTop,
} from "./StyledScreens";

const ScreensScreen = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const dispatch = useDispatch();

  const getAllScreens = useSelector((state) => state.getAllScreens);
  const { products, loading, error } = getAllScreens;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <HomeScreenBody>
      <HomeScreenTitle>Latest Products</HomeScreenTitle>
      <a href="#">
        <SideBarToTop>
          <i class="fas fa-angle-double-up" style={{ fontSize: "30px" }}></i>
        </SideBarToTop>
      </a>
      <HomeScreenProducts className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Products
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
              typeScreen="/home/screens"
            />
          ))
        )}
      </HomeScreenProducts>
    </HomeScreenBody>
  );
};

export default ScreensScreen;
