import React from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Second from "./DesignFearless";
import SectionHeader from "./SectionHeader";
import GifPlayer from "./GifPlayer";
export default function Index() {
  return (
    <>
      <Navbar activatedLink="home" />
      <Second />
      <SectionHeader title="Writers" />
      <GifPlayer title="writer" />
      <SectionHeader title="Designers" />
      <GifPlayer title="designer" />
      <Footer />
    </>
  );
}
