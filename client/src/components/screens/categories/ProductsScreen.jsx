import Products from "../../features/Products/Products";
import "../Homescreen.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByType as listProducts } from "../../../redux/actions/productActions";

import {
  HomeScreenBody,
  HomeScreenProducts,
  HomeScreenTitle,
  SideBarToTop,
} from "./StyledScreens";

const ProductsScreen = ({ type }) => {
  const category = useParams();
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProductsByType);
  const { products, loading, error } = getProducts;
  // const [offest]

  useEffect(() => {
    dispatch(listProducts(category[type]));
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
              typeScreen={`/home/${type}`}
            />
          ))
        )}
      </HomeScreenProducts>
    </HomeScreenBody>
  );
};

export default ProductsScreen;
