import React from "react";
import "../../../../App.css";
import "../LandingPage.css";

const ProductsLandingPage = () => {
  return (
    <section id="products">
      <div class="container">
        <div class="products-header">
          <h2>on demand products</h2>
          <p>take a look at the top sellers at our shop at every category!</p>
        </div>
        <div class="product product-1">
          <figure>
            {" "}
            <img
              src="http://cdn.shopify.com/s/files/1/0334/1592/1797/products/Wethenew-Sneakers-France-Air-Jordan-1-Mid-Barely-Orange-1_1200x_268209c2-22ff-4dbe-a060-3bc08e0e60e2_1200x1200.png?v=1615901936"
              alt="product-image"
            />
            <figcaption>air jordan retro</figcaption>
            <figcaption>$ 99.00</figcaption>
          </figure>
        </div>
        <div class="product product-2">
          <figure>
            {" "}
            <img
              src="./images\LouisVittionLandingPage.jpeg"
              alt="product-image"
            />
            <figcaption>women fashion</figcaption>
            <figcaption>$ 1799.00</figcaption>
          </figure>
        </div>
        <div class="product product-3">
          <figure>
            {" "}
            <img
              src="https://www.idigital.co.il/files/iphone12/iphone12pro-max/iPhone_12_Pro_Max_Lineup_Screen__WWEN.jpg"
              alt="product-image"
            />
            <figcaption>iphone 12 pro max</figcaption>
            <figcaption>$ 599.00</figcaption>
          </figure>
        </div>
        <div class="product product-4">
          <figure>
            {" "}
            <img
              src="https://www.idigital.co.il/files/Mac/MacBookAir/MacBookAir2020/mba2020-gold.jpg"
              alt="product-image"
            />
            <figcaption>air mac pro 2021</figcaption>
            <figcaption>$ 799.00</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ProductsLandingPage;
