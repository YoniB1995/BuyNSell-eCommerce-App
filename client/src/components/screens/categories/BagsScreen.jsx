import styled from "styled-components";
import Products from "../../features/Products/Products";
import "../Homescreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../features/Navbar/NavbarNew";
import Backdrop from "../../features/Backdrop/Backdrop";
import SideDrawer from "../../features/SideDrawer/SideDrawer";
import Footer from "../../features/Footer/Footer";
import { getAllBags as listProducts } from "../../../redux/actions/productActions";
import {
  HomeScreenBody,
  HomeScreenProducts,
  HomeScreenTitle,
  SideBarToTop,
} from "./StyledScreens";

const BagsScreen = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const dispatch = useDispatch();

  const getAllBags = useSelector((state) => state.getAllBags);
  const { products, loading, error } = getAllBags;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
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
              typeScreen={"/home/bags"}
            />
          ))
        )}
      </HomeScreenProducts>
      <Footer />
    </>
  );
};

export default BagsScreen;
