import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../Navbar/NavbarNew";
import Backdrop from "../../Backdrop/Backdrop";
import SideDrawer from "../../SideDrawer/SideDrawer";
import Footer from "../../Footer/Footer";

import { getShoesDetails } from "../../../../redux/actions/productActions";
import { addToCart } from "../../../../redux/actions/cartActions";

const ShoesDisplayScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const [sideToggle, setSideToggle] = useState(false);

  const getShoes = useSelector((state) => state.getShoesDetails);
  const { loading, error, product } = getShoes;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getShoesDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div className="productscreen">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="productscreen__left">
              <div className="left__image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="left__info">
                <p className="left__name">{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </div>
            </div>
            <div className="productscreen__right">
              <div className="right__info">
                <p>
                  Price:
                  <span>${product.price}</span>
                </p>
                <p>
                  Status:
                  <span>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p>
                  Qty
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ShoesDisplayScreen;
