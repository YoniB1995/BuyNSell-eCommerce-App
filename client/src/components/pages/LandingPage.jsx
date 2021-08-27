import React from "react";
import Header from "../features/LandingPage/Header/Header";
import ClassicSection from "../features/LandingPage/ClassicSection/ClassicSection";
import Products from "../features/LandingPage/Products/Products";
import Blog from "../features/LandingPage/Blog/Blog";
import OurPartners from "../features/LandingPage/OurPartners/OurPartners";
// import "../features/LandingPage/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <>
        <Header />
        <ClassicSection />
        <Products />
        <Blog />
        <OurPartners />
      </>
    </>
  );
};

export default LandingPage;
