import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
export default function SectionHeader(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  return (
    <div
      className={isMobile ? "section-header" : "section-header margin-top-120"}
    >
      <Container className="text-center">
        <Row>
          <Col className="my-auto">
            <img
              src={
                props.title === "Writers"
                  ? isMobile
                    ? "/writer_section_mobile.png"
                    : "/writer_section.png"
                  : isMobile
                  ? "/designer_section_mobile.png"
                  : "/designer_section.png"
              }
              alt="heading"
              className=" margin-top-8 margin-bottom-8"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
