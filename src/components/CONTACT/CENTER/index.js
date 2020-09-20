import React from "react";
import Left from "./LEFT";
import Right from "./RIGHT";
import { Container, Col, Row } from "react-bootstrap";
export default function Index() {
  return (
    <Container className="margin-top-120">
      <Row>
        <Col>
          <Left />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Right />
        </Col>
      </Row>
    </Container>
  );
}
