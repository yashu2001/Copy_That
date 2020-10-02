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
        <div className="contain-65 mx-auto text-center">
          <h5 className="margin-top-120 bolder text-center">
            DESIGN COPY. FASTER. TOGETHER.
          </h5>
          <p className="p1 text-center letter-space-36">
            <span style={{ color: "#904ad4" }}>CopyThat</span> is a{" "}
            <span className="bold">Copy Visualization</span> and{" "}
            <span className="bold">Handoff tool</span> for writers and designers
            to collaborate in real-time allowing for seamless edits, faster
            feedback, and more efficient design.
          </p>
        </div>
      </Container>
      <div className="contain-90 mx-auto margin-top-56">
        <Row className="full-width">
          <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 4, offset: 0 }}
            className="text-center"
          >
            <img src="/design_icon.svg" alt="design icon" />
            <p className="p4 mt-4">
              Lessen the concern of accidentally altering the design’s layout.
            </p>
          </Col>
          <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 4, offset: 0 }}
            className="text-center"
          >
            <img src="/vc_icon.svg" alt="design icon" />
            <p className="p4 mt-4">
              Reduces the need for multiple saved versions of projects cutting
              down on confusion and file clutter.
            </p>
          </Col>
          <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 4, offset: 0 }}
            className="text-center"
          >
            <img src="/handoff_icon.svg" alt="design icon" />
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
