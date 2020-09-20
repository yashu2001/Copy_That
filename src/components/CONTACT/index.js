import React from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Center from "./CENTER";
export default function Index() {
  return (
    <>
      <Navbar activatedLink="contact" />
      <Center />
      <Footer />
    </>
  );
}
