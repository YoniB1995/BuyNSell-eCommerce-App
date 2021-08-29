import React from "react";
import styled from "styled-components";
import {
  faLinkedin,
  faStaylinked,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterBottom = () => {
  return (
    <FooterBottomBody>
      <FooterSide>
        <a
          href="https://www.linkedin.com/in/yoni-bitew-955b971bb/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              fontSize: "30px",
              marginRight: "15px",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yoni-bitew-955b971bb/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faStaylinked}
            style={{ fontSize: "30px", color: "white" }}
          />
        </a>
      </FooterSide>
      <FooterSide>All Copyright reserved 2020 yoniB ©</FooterSide>
      <FooterSide>
        <a href="https://github.com/YoniB1995" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "30px", marginRight: "15px", color: "white" }}
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006574396023"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: "30px", color: "white" }}
          />
        </a>
      </FooterSide>
    </FooterBottomBody>
  );
};

export default FooterBottom;

const FooterSide = styled.div``;

const FooterBottomBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
  font-size: 12px;
  border-top: wheat solid black;
  background-color: #131a22;
  color: #f4f4f4;
`;
