import React from "react";
import styled from "styled-components";
import "../LandingPage.css";

const OurPartners = () => {
  return (
    <>
      <OurPartnersBody>
        <div class="blog-header" id="partners">
          <h2>Our Partners</h2>
        </div>
        <OurPartnersFlex>
          <PartnerCard>
            <img
              src="https://www.gartner.com/imagesrv/peer-insights/vendors/logos/microsoft.jpg"
              alt="Microsoft Logo"
            />
          </PartnerCard>
          <PartnerCard>
            <img
              src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202101262229"
              alt="Apple Logo"
            />
          </PartnerCard>
          <PartnerCard>
            <img
              src="https://www.youtube.com/img/desktop/yt_1200.png"
              alt="YouTube Logo"
            />
          </PartnerCard>
          <PartnerCard>
            <img
              src="https://s3-symbol-logo.tradingview.com/amazon--600.png"
              alt="Amazon Logo"
            />
          </PartnerCard>
          <PartnerCard>
            <img
              src="https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.18169-9/s526x395/10451723_284055391803474_5264909208807903951_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5QKEz-mNqogAX9jgEsm&_nc_ht=scontent.fsdv1-2.fna&oh=afd5e51947f5db68569a270d6375ba5d&oe=61545D74"
              alt="eBay Logo"
            />
          </PartnerCard>
        </OurPartnersFlex>
      </OurPartnersBody>
    </>
  );
};

export default OurPartners;

const OurPartnersBody = styled.div`
  background: #f4f4f4;
  text-align: center;
`;
const OurPartnersFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    height: 250px;
    width: 250px;
    margin: 20px;
    border-radius: 15px;
  }
`;

const PartnerCard = styled.div``;
