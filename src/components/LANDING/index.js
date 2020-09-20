import React from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Second from "./DesignFearless";
export default function Index() {
  return (
    <>
      <Navbar activatedLink="home" />
      <Second />
      <Footer />
    </>
  );
}
