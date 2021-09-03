import styled from "styled-components";
import Products from "../../features/Products/Products";
import "../Homescreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../features/Navbar/NavbarNew";
import Backdrop from "../../features/BackDrop/Backdrop";
import SideDrawer from "../../features/SideDrawer/SideDrawer";
import Footer from "../../features/Footer/Footer";
import { getAllShoes as listProducts } from "../../../redux/actions/productActions";

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

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
