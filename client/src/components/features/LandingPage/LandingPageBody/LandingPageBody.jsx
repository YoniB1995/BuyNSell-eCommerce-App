import React from "react";
import "../LandingPage.css";

const LandingPageBody = () => {
  return (
    <>
      <section id="summer-collection">
        <div class="container">
          <div class="sc-content">
            <h1>classic collection edition</h1>
            <p class="description">
              Enjoy the collection of high quality suits and dresses for men and
              women , only can be found on buy&sell ecommerce stores!. want to
              sell your classic item? register and put your details!
            </p>
            <a href="#">discover now</a>{" "}
          </div>
          <div class="sc-media">
            <div class="sc-media-bg">
              {" "}
              <img src="../images/classicCollection.jpeg" alt="sc-image" />{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageBody;
