import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Content from "./Content";
export default function index() {
  return (
    <>
      <Container className="margin-top-120 reset-padding">
        <Header />
        <Content />
      </Container>
    </>
  );
}
