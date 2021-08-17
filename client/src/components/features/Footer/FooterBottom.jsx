import React from "react";
import styled from "styled-components";

const FooterBottom = () => {
  return (
    <FooterBottomBody>All Copyright reserved 2020 yoniB ©</FooterBottomBody>
  );
};

export default FooterBottom;

const FooterBottomBody = styled.div`
  font-size: 12px;
  border-top: wheat solid black;
  background-color: #141414;
  color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
