import React from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Second from "./DesignFearless";
import SectionHeader from "./SectionHeader";
export default function Index() {
  return (
    <>
      <Navbar activatedLink="home" />
      <Second />
      <SectionHeader title="Writers"/>
      <SectionHeader title="Designers"/>
      <Footer />
    </>
  );
}
