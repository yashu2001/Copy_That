import React from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Second from "./DesignFearless";
import SectionHeader from "./SectionHeader";
import GifPlayer from "./GifPlayer";
import Hero from "./Hero";
import WriterFeatures from "./WriterFeatures";
import DesignerFeatures from "./DesignerFeatures";
import { useMediaQuery } from "react-responsive";
export default function Index() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <>
      <Navbar activatedLink="home" />
      {isMobile ? <></> : <Hero />}
      <Second />
      <SectionHeader title="Writers" />
      <WriterFeatures />
      <div style={{ height: "150px" }}></div>
      <GifPlayer title="writer" />
      <SectionHeader title="Designers" />
      <DesignerFeatures />
      <div style={{ height: "150px" }}></div>
      <GifPlayer title="designer" />
      <Footer />
    </>
  );
}
