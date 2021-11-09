import React, { useState } from "react";
import axios from "axios";
import {
  HEROKU_MAIL_API,
  LOCAL_MAIL_API,
} from "../../../../service/api-service";
import styled from "styled-components";
import "../LandingPage.css";

const OurPartners = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const addNewsletter = async () => {
    await axios.post(LOCAL_MAIL_API, { email: email }).then(() => {
      email && setSent(true);
    });
  };
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
        <NewsLetterDiv>
          <div class="blog-header" id="partners">
            <h2>Newsletter</h2>
            {!sent ? (
              <>
                <h4>Stay Updated and Submit your email for Daily Updates!</h4>
                <input
                  type="email"
                  placeholder="Type your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  minLength={5}
                />
                <button onClick={addNewsletter}>Send</button>
              </>
            ) : (
              <h3>Email Sent!</h3>
            )}
          </div>
        </NewsLetterDiv>
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

const NewsLetterDiv = styled.div`
  padding: 5rem;
`;
