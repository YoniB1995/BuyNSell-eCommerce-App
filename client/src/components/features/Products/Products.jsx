import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = ({ imageUrl, name, price, description, productId }) => {
  return (
    <ProductBody>
      <img src={imageUrl} alt={name} />
      <ProductInfo>
        <InfoName>{name}</InfoName>
        <InfoDesc>{description.substring(0, 100)}...</InfoDesc>
        <InfoPrice>${price}</InfoPrice>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </ProductInfo>
    </ProductBody>
  );
};

export default Products;

const ProductBody = styled.div`
  width: 300px;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 170px;
    border-radius: 8px;
  }

  @media (max-width: 1232px) {
    width: 310px;
  }

  @media (max-width: 915px) {
    width: 330px;
  }

  @media (max-width: 705px) {
    width: 380px;
  }
`;

const ProductInfo = styled.div`
  p {
    margin-bottom: 8px;
  }
`;

const InfoName = styled.p`
  font-size: 1rem;
  overflow: hidden;
`;

const InfoDesc = styled.p`
  font-size: 0.8rem;
`;

const InfoPrice = styled.p`
  font-weight: bold;
`;
