import React from "react";
import Header from "../features/LandingPage/Header/Header";
import ClassicSection from "../features/LandingPage/ClassicSection/ClassicSection";
import Products from "../features/LandingPage/Products/Products";
import Blog from "../features/LandingPage/Blog/Blog";
import OurPartners from "../features/LandingPage/OurPartners/OurPartners";
import Footer from "../features/Footer/Footer";
import { SideBarToTop } from "../screens/categories/StyledScreens";

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
        <Products />
        <Blog />
        <OurPartners />
        <Footer />
      </>
    </>
  );
};

export default LandingPage;
