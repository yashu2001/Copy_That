import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
export default function Second() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <img
          src="/pattern.png"
          style={{ width: "98vw", objectFit: "cover" }}
          alt="this is not available"
        />
      )}
      <Container>
        <h1 className="margin-top-120 text-center h1-after">
          <span style={{ color: "#904ad4" }}>Design </span>
          <span className="gradient-header">Fearlessly</span>
        </h1>
        <div className="contain-65 mx-auto">
          <h5 className="margin-top-120 bolder">
            DESIGN COPY. FASTER. TOGETHER.
          </h5>
          <p className="p1 ml-4 text-center letter-space-36">
            CopyThat is a Copy Visualization and Handoff tool for writers and
            designers to collaborate in real-time allowing for seamless edits,
            faster feedback, and more efficient design.
          </p>
        </div>
      </Container>
      <div className="contain-90 mx-auto margin-top-56">
        <Row style={{ width: "100%" }}>
          <Col xs={12} sm={12} md={4} className="text-center">
            <img src="/design_icon.png" alt="design icon" />
            <p className="p4 mt-4">
              Lessen the concern of accidentally altering the design’s layout.
            </p>
          </Col>
          <Col xs={12} sm={12} md={4} className="text-center">
            <img src="/vc_icon.png" alt="design icon" />
            <p className="p4 mt-4">
              Reduces the need for multiple saved versions of projects cutting
              down on confusion and file clutter.
            </p>
          </Col>
          <Col xs={12} sm={12} md={4} className="text-center">
            <img src="/handoff_icon.png" alt="design icon" />
            <p className="p4 mt-4">
              Eliminate the need for copy/paste and the tedious cycle of revise
              and submit to create a smooth hand-off.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
