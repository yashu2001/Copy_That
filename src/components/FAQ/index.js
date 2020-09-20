import React from "react";
import Navbar from "../COMMON/Navbar";
import Center from "./CENTER";
import Footer from "../COMMON/Footer";
export default function Index() {
  return (
    <>
      <Navbar activatedLink="faq" />
      <Center />
      <Footer />
    </>
  );
}
