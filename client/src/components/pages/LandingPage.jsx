import React from "react";
import Header from "../features/LandingPage/Header/Header";
import ClassicSection from "../features/LandingPage/ClassicSection/ClassicSection";
import Blog from "../features/LandingPage/Blog/Blog";
import OurPartners from "../features/LandingPage/OurPartners/OurPartners";
import { SideBarToTop } from "../screens/categories/StyledScreens";
import ProductsLandingPage from "../features/LandingPage/Products/ProductsLandingPage";

const LandingPage = () => {
  return (
    <>
      <>
        <Header />
        <a href="#">
          <SideBarToTop>
            <i class="fas fa-angle-double-up" style={{ fontSize: "30px" }}></i>
          </SideBarToTop>
        </a>
        <ClassicSection />
        <ProductsLandingPage />
        <Blog />
        <OurPartners />
      </>
    </>
  );
};

export default LandingPage;
