import styled from "styled-components";
import React from "react";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <FooterBody>
        <FooterGridColumn></FooterGridColumn>
        <FooterGridColumn>
          <h4>Get to know us</h4>
          <p>Careers</p>
          <p>Blogs</p>
          <p>About AmoZa</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn>
          <h4>Make Money with Us</h4>
          <p>Sell Products on AmoZa</p>
          <p>Advertise your products</p>
          <p>About AmoZa</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn>
          <h4>Make Money with Us</h4>
          <p>Sell Products on AmoZa</p>
          <p>Advertise your products</p>
          <p>About AmoZa</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn>
          <h4>Let Us Help You</h4>
          <p>Amazon </p>
          <p>Advertise your products</p>
          <p>About AmoZa</p>
          <p>Investor Relations</p>
        </FooterGridColumn>
        <FooterGridColumn></FooterGridColumn>
      </FooterBody>
      <FooterBottom />
    </>
  );
};

export default Footer;

const FooterBody = styled.div`
  padding: 4rem;
  background-color: #232f3e;
  color: #f4f4f4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

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
