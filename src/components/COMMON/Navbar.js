import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Drawer from "@material-ui/core/Drawer";
export default function NAVBAR({ activatedLink }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isTime = useMediaQuery({ query: "(max-width:1000px)" });
  const navLinks = [
    {
      icon: "/Home iocn.svg",
      text: "Home",
      link: "/",
    },
    {
      icon: "/Chat icon.svg",
      text: "Contact us",
      link: "/contact",
    },
    {
      icon: "/Info icon.svg",
      text: "FAQs",
      link: "/faq",
    },
  ];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="shadow">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={(event) => {
            event.preventDefault();
            setDrawerOpen(true);
          }}
        />
        <Link to="/">
          <Navbar.Brand>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="18.568"
              viewBox="0 0 120 18.568"
            >
              <path
                id="Path_198"
                data-name="Path 198"
                d="M5.742,40.324a6.47,6.47,0,0,1,.438-2.387A5.8,5.8,0,0,1,7.413,36,5.741,5.741,0,0,1,9.35,34.7a6.535,6.535,0,0,1,2.546-.477,7.379,7.379,0,0,1,1.233.093,5.531,5.531,0,0,1,.915.225,3.474,3.474,0,0,1,.769.318l.371-.637q-.424-.186-.9-.345a10.1,10.1,0,0,0-1.034-.239,7.636,7.636,0,0,0-1.353-.106,7.1,7.1,0,0,0-2.586.477,6.616,6.616,0,0,0-2.175,1.366,6.7,6.7,0,0,0-2.082,4.947A6.965,6.965,0,0,0,5.6,43.135a6.342,6.342,0,0,0,1.5,2.135,6.671,6.671,0,0,0,2.228,1.366,7.642,7.642,0,0,0,2.706.477,7.051,7.051,0,0,0,1.432-.133,8.556,8.556,0,0,0,1.088-.292,5.336,5.336,0,0,0,.9-.424l-.371-.637a3.347,3.347,0,0,1-.8.4,5.958,5.958,0,0,1-.955.279,6.26,6.26,0,0,1-1.3.119A6.88,6.88,0,0,1,9.4,45.947a5.827,5.827,0,0,1-1.976-1.3A5.7,5.7,0,0,1,6.18,42.711,6.47,6.47,0,0,1,5.742,40.324Zm-3.342,0a9.53,9.53,0,0,1,.743-3.833A8.935,8.935,0,0,1,5.159,33.56a8.782,8.782,0,0,1,2.971-1.87,10,10,0,0,1,3.607-.65,11.262,11.262,0,0,1,2.692.292,12.72,12.72,0,0,1,2.029.663,9.5,9.5,0,0,1,1.7.928L15.371,37.83a9.369,9.369,0,0,0-.928-.61,8.907,8.907,0,0,0-1.074-.411,4.663,4.663,0,0,0-1.419-.2A3.83,3.83,0,0,0,9.23,37.7a3.648,3.648,0,0,0-.809,1.18,3.61,3.61,0,0,0-.292,1.446,3.476,3.476,0,0,0,.305,1.446,3.722,3.722,0,0,0,.836,1.18,3.957,3.957,0,0,0,1.247.8,4.109,4.109,0,0,0,1.565.292,4.957,4.957,0,0,0,1.512-.212,5.538,5.538,0,0,0,1.114-.477,4.091,4.091,0,0,0,.928-.69l2.785,4.907a7.883,7.883,0,0,1-1.7,1.034,14.414,14.414,0,0,1-2.042.69,10.636,10.636,0,0,1-2.732.318,10.511,10.511,0,0,1-3.82-.676,9,9,0,0,1-3.024-1.9A8.61,8.61,0,0,1,3.116,44.1,9.7,9.7,0,0,1,2.4,40.324Zm15.756,0a9.041,9.041,0,0,1,.729-3.607,9.279,9.279,0,0,1,4.947-4.947,9.285,9.285,0,0,1,7.215,0,9.279,9.279,0,0,1,4.947,4.947,9.285,9.285,0,0,1,0,7.215,9.279,9.279,0,0,1-4.947,4.947,9.285,9.285,0,0,1-7.215,0,9.279,9.279,0,0,1-4.947-4.947A9.041,9.041,0,0,1,18.156,40.324Zm2.493,0a6.608,6.608,0,0,0,.531,2.639A6.842,6.842,0,0,0,24.8,46.584a6.83,6.83,0,0,0,5.279,0A6.842,6.842,0,0,0,33.7,42.963a6.83,6.83,0,0,0,0-5.279,6.842,6.842,0,0,0-3.621-3.621,6.83,6.83,0,0,0-5.279,0,6.842,6.842,0,0,0-3.621,3.621A6.608,6.608,0,0,0,20.649,40.324Zm3.077,0a3.61,3.61,0,0,0,.292,1.446,3.726,3.726,0,0,0,1.976,1.976,3.727,3.727,0,0,0,2.891,0,3.726,3.726,0,0,0,1.976-1.976,3.727,3.727,0,0,0,0-2.891A3.726,3.726,0,0,0,28.885,36.9a3.727,3.727,0,0,0-2.891,0,3.726,3.726,0,0,0-1.976,1.976A3.61,3.61,0,0,0,23.726,40.324Zm3.714,6.1a5.9,5.9,0,0,1-2.374-.477A6.209,6.209,0,0,1,21.816,42.7a6.141,6.141,0,0,1,0-4.748A6.209,6.209,0,0,1,25.066,34.7a6.141,6.141,0,0,1,4.748,0,6.209,6.209,0,0,1,3.249,3.249,6.141,6.141,0,0,1,0,4.748,6.209,6.209,0,0,1-3.249,3.249A5.9,5.9,0,0,1,27.44,46.425ZM51.419,38.2a6.971,6.971,0,0,1-.637,3.117A5.565,5.565,0,0,1,49.045,43.4a7.454,7.454,0,0,1-2.573,1.167,12.93,12.93,0,0,1-3.17.371v4.218h-5.65V31.464H43.3a12.93,12.93,0,0,1,3.17.371A7.454,7.454,0,0,1,49.045,33a5.564,5.564,0,0,1,1.737,2.082A6.971,6.971,0,0,1,51.419,38.2Zm-2.573,0a4.826,4.826,0,0,0-.411-2.069A3.751,3.751,0,0,0,47.281,34.7a5.176,5.176,0,0,0-1.764-.836,8.4,8.4,0,0,0-2.215-.279h-3V47.035h.69V42.817H43.3a8.394,8.394,0,0,0,2.215-.279,5.176,5.176,0,0,0,1.764-.836,3.751,3.751,0,0,0,1.154-1.432A4.826,4.826,0,0,0,48.846,38.2Zm-.743,0a4.127,4.127,0,0,1-.4,1.91,3.246,3.246,0,0,1-1.061,1.22,4.472,4.472,0,0,1-1.525.65,8.059,8.059,0,0,1-1.817.2H40.994V34.223H43.3a8.059,8.059,0,0,1,1.817.2,4.472,4.472,0,0,1,1.525.65,3.246,3.246,0,0,1,1.061,1.22A4.127,4.127,0,0,1,48.1,38.2Zm-4.8,1.963h.239a2.133,2.133,0,0,0,1.6-.517,2.375,2.375,0,0,0,0-2.891,2.133,2.133,0,0,0-1.6-.517H43.3Zm12.944,1.379-5.491-10.08h6.286l2.042,3.74,2.016-3.74h6.286L61.9,41.544v7.613h-5.65Zm3.183,5.491V40.7L63.3,33.586H62.48l-3.4,6.286-3.422-6.286h-.8L58.713,40.7v6.34ZM69.588,36.106H66.326V31.464H78.686v4.642H75.424v13.05H69.588Zm3.263,10.928V34.223h3.793v-.637H68.368v.637h3.793V47.035Zm6.233-15.57h5.65v6.021h3.157V31.464h5.676V49.157H87.891V42.6H84.734v6.552h-5.65Zm3.342,15.57V40.324h7.8v6.711h.69V33.586h-.69v6.1h-7.8v-6.1h-.69V47.035Zm17.719-15.57h4.244L111.1,49.157h-5.57l-.584-1.592H99.588L99,49.157h-5.57Zm3.316,12.2-1.194-3.1-1.194,3.1Zm-6.074,3.369.5-1.326h8.753l.5,1.326h.743l-5.119-13.448h-1.008L96.644,47.035Zm4.881-12.812,4.138,10.849H98.129ZM113.3,36.106h-3.263V31.464H122.4v4.642h-3.263v13.05H113.3Zm3.263,10.928V34.223h3.793v-.637h-8.276v.637h3.793V47.035Z"
                transform="translate(-2.4 -31.04)"
                fill="#a75fb4"
              />
            </svg>
          </Navbar.Brand>
        </Link>
        {isTime ? (
          <></>
        ) : (
          <Nav className="ml-auto">
            <Nav className="nav-grp">
              <Nav.Link
                as={Link}
                to="/"
                className={activatedLink === "home" ? "active" : ""}
              >
                <span className={activatedLink === "home" ? "active-span" : ""}>
                  HOME
                </span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/faq"
                className={activatedLink === "faq" ? "active" : ""}
              >
                <span className={activatedLink === "faq" ? "active-span" : ""}>
                  FAQS
                </span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                className={activatedLink === "contact" ? "active" : ""}
              >
                <span
                  className={activatedLink === "contact" ? "active-span" : ""}
                >
                  CONTACT
                </span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Link to="/">
                <Button size="sm" className="primary-button">
                  REQUEST DEMO
                </Button>
              </Link>
            </Nav>
          </Nav>
        )}
      </Navbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Row className="full-width pmargin-top-5">
          <Col xs={{ span: 2, offset: 10 }}>
            <img
              src="/close.svg"
              alt="close btn"
              onClick={() => setDrawerOpen(false)}
            />
          </Col>
        </Row>
        <Row className="pmargin-top-10 full-width rule-below">
          <Col xs={{ span: 11, offset: 1 }}>
            <img src="/Logo 1.svg" alt="logo" />
          </Col>
        </Row>
        {navLinks.map((item, idx) => {
          return (
            <Row className="pmargin-top-5 full-width" key={idx}>
              <Col xs={{ span: 2, offset: 1 }}>
                <Link to={item.link}>
                  <img
                    src={item.icon}
                    alt={item.text}
                    style={{ display: "inline" }}
                  />
                </Link>
              </Col>
              <Col xs={9} className="push-me-down">
                <Link to={item.link} className="full-width">
                  <p className="p4" style={{ display: "inline" }}>
                    {item.text}
                  </p>
                </Link>
              </Col>
            </Row>
          );
        })}
        <Row className="pmargin-top-20 full-width">
          <Col className="mx-auto">
            <Button
              size="sm"
              className="primary-button full-width"
              style={{ paddingLeft: 20, paddinRight: 20 }}
            >
              REQUEST DEMO
            </Button>
          </Col>
        </Row>
        <Row className="full-width pmargin-top-5">
          <Col xs={{ span: 3, offset: 3 }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/fb.svg" alt="fb icon" />
            </a>
          </Col>
          <Col xs={{ span: 3 }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.svg" alt="fb icon" />
            </a>
          </Col>
        </Row>
      </Drawer>
    </>
  );
}
