import React from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Second from "./DesignFearless";
import SectionHeader from "./SectionHeader";
import GifPlayer from "./GifPlayer";
import Hero from "./Hero";
import WriterFeatures from "./WriterFeatures";
import DesignerFeatures from "./DesignerFeatures";
import MobileWriter from "./MobileWriter";
import MobileDesigner from "./MobileDesigner";
import { useMediaQuery } from "react-responsive";
export default function Index() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isTab = useMediaQuery({ query: "(max-width:1000px)" });
  return (
    <>
      <Navbar activatedLink="home" />
      {isMobile ? <></> : <Hero />}
      <Second />
      <SectionHeader title="Writers" />
      {isTab ? <MobileWriter /> : <WriterFeatures />}
      <div style={{ height: "150px" }}></div>
      <GifPlayer title="writer" />
      <SectionHeader title="Designers" />
      {isTab ? <MobileDesigner /> : <DesignerFeatures />}
      <div style={{ height: "150px" }}></div>
      <GifPlayer title="designer" />
      <Footer />
    </>
  );
}
