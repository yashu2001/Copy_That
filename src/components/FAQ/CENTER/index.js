import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Content from "./Content";
export default function index() {
  return (
    <>
      <Container className="mt-5">
        <Header />
        <Content />
      </Container>
    </>
  );
}
