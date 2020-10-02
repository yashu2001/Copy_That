import React from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Second from "./DesignFearless";
import SectionHeader from "./SectionHeader";
import GifPlayer from "./GifPlayer";
import Hero from "./Hero";
import WriterFeatures from "./WriterFeatures";
import DesignerFeatures from "./DesignerFeatures";
import MobileFeatures from "./MobileFeatures";
import { useMediaQuery } from "react-responsive";
import { Button, Container } from "react-bootstrap";
export default function Index() {
  const writer = [
    {
      title: "Dedicated workspace",
      text:
        "A dedicated work space for all edits and content creation which eliminates the need for multiple files.",
      src: "/Dedicated workspace.svg",
      alt: "editor list",
    },
    {
      title: "Preview copy in real time",
      text:
        "Visualize and preview copy in real time making edits, feedback, and content creation seamless.",
      src: "/Preview copy_in_real_time.svg",
      alt: "writer preview",
    },
    {
      title: "One click content handoff",
      text:
        "Handoff copy with one click of a button. Once synced the content is available for immediate review and design updates.",
      src: "/One Click Handoff.svg",
      alt: "editor list",
    },
  ];
  const designer = [
    {
      title: "Automatically sync copy",
      text:
        "Copy is automatically synced back to the original artboards allowing for an instant review and approval.",
      src: "/Sync copy.svg",
      alt: "editor list",
    },
    {
      title: "Track progress",
      text:
        "From the beginning to the end of the project each collaborator will have access and ability to review the progress of the design.",
      src: "/Track Progress.svg",
      alt: "Track progress",
    },
    {
      title: "Request Copy",
      text:
        "To request copy simply select the requested text objects within the design file and submit to the writer for editing and content development.",
      src: "/Request Copy.svg",
      alt: "Request Copy",
    },
  ];
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isTab = useMediaQuery({ query: "(max-width:1000px)" });
  return (
    <>
      <Navbar activatedLink="home" />
      {isMobile ? <></> : <Hero />}
      <Second />
      {isMobile ? (
        <Container
          style={{
            backgroundColor: "#F6F5F5",
            height: "10vh",
          }}
          className="text-center"
        >
          <Button size="sm" className="primary-button">
            <span style={{ paddingLeft: 20, paddingRight: 20 }}>
              REQUEST DEMO
            </span>
          </Button>
        </Container>
      ) : (
        <></>
      )}
      <SectionHeader title="Writers" />
      {isTab ? (
        <MobileFeatures data={writer} />
      ) : (
        <>
          <WriterFeatures />
          <div style={{ height: "150px" }}></div>
          <GifPlayer title="writer" />
        </>
      )}
      <SectionHeader title="Designers" />
      {isTab ? (
        <MobileFeatures data={designer} />
      ) : (
        <>
          <DesignerFeatures />
          <div style={{ height: "150px" }}></div>
          <GifPlayer title="designer" />
        </>
      )}

      <Footer />
    </>
  );
}
