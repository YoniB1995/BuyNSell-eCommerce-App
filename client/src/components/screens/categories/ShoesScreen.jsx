import Products from "../../features/Products/Products";
import "../Homescreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../features/Navbar/NavbarNew";
import Backdrop from "../../features/Backdrop/Backdrop";
import SideDrawer from "../../features/SideDrawer/SideDrawer";
import Footer from "../../features/Footer/Footer";
import { getAllShoes as listProducts } from "../../../redux/actions/productActions";
import {
  HomeScreenBody,
  HomeScreenProducts,
  HomeScreenTitle,
  SideBarToTop,
} from "./StyledScreens";

const ShoesScreen = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const dispatch = useDispatch();

  const getAllShoes = useSelector((state) => state.getAllShoes);
  const { products, loading, error } = getAllShoes;

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
              typeScreen="/home/shoes"
            />
          ))
        )}
      </HomeScreenProducts>
      <Footer />
    </>
  );
};

export default ShoesScreen;
