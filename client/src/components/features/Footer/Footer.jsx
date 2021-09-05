import styled from "styled-components";
import React from "react";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <BackToTop>
        <i class="fas fa-angle-double-up"></i>{" "}
        <a href="#" style={{ textDecoration: "none", color: "#f4f4f4" }}>
          Back To Top
        </a>
      </BackToTop>
      <FooterBody>
        <FooterGridColumn>
          <h4>Get to know us</h4>
          <p>Careers</p>
          <p>Blogs</p>
          <p>About BuyNGo</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn>
          <h4>Make Money with Us</h4>
          <p>Sell Products on BuyNGo</p>
          <p>Advertise your products</p>
          <p>About BuyNGo</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn>
          <h4>Make Money with Us</h4>
          <p>Sell Products on BuyNGo</p>
          <p>Advertise your products</p>
          <p>About BuyNGo</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn>
          <h4>Let Us Help You</h4>
          <p>BuyNGo </p>
          <p>Advertise your products</p>
          <p>About BuyNGo</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn></FooterGridColumn>
      </FooterBody>
      <FooterBottom />
    </>
  );
};

export default Footer;

const BackToTop = styled.div`
  text-align: center;
  background-color: #232f3e;
  color: #f4f4f4;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
const FooterBody = styled.div`
  padding: 4rem;
  background-color: #232f3e;
  color: #f4f4f4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 965px) {
    display: flex;
    flex-direction: column;
    font-size: 30px;
  }

  @media (max-width: 705px) {
    display: flex;
    flex-direction: column;
    font-size: 30px;
  }
`;

const FooterGridColumn = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 2rem;
  font-weight: 200;
`;
