import React from "react";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
export default function Hero() {
  const isMobileAndTab = useMediaQuery({ query: "(max-width: 1150px)" });
  return (
    <div className="contain-full margin-top-169 margin-bottom-199">
      <Row>
        <Col xs={6} className="padding-left-152">
          <div className="contain-75">
            <h1 className={isMobileAndTab ? "landing-small" : "landing"}>
              DESIGN <span className="black-text">COPY. FASTER. TOGETHER</span>
            </h1>
            <p
              style={{ fontSize: "25px", color: "#4A4E57", marginTop: "40px" }}
            >
              Preview and handoff copy without breaking the design.
            </p>
            <div style={{ marginTop: "44px" }}>
              <a href="http://www.facebook.com">
                <img src="/facebook_purple.png" alt="facebook link" />
              </a>
              <a href="http://www.instagram.com">
                <img
                  src="/insta_purple.png"
                  className="margin-left-14"
                  alt="instagram link"
                />
              </a>
              <a href="http://www.twitter.com">
                <img
                  src="/twitter_purple.png"
                  className="margin-left-14"
                  alt="twitter link"
                />
              </a>
            </div>
          </div>
        </Col>
        <Col xs={6} className="pr-0">
          <img
            srcset="/hero_img.png,
             hero_img@2x.png 2x"
            src="/hero_img.png"
            alt="Hero landing copythat show"
            className="gif"
          />
        </Col>
      </Row>
    </div>
  );
}
