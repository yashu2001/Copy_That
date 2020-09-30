import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
export default function RIGHT() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [businessname, setBusinessName] = useState("");
  const [businessemail, setBusinessEmail] = useState("");
  const [emailValidity, setEmailValidity] = useState(true);
  const [message, setMessage] = useState("");
  return (
    <>
      <div style={{ position: "relative" }}>
      {isMobile ? (
          <Link to="/">
            <p className="super"></p>
          </Link>
        ) : (
          <></>
        )}
        <h4 className={isMobile ? "text-center bold" : "bold"}>
          <span className={isMobile ? "active-span-header" : ""}>Let's </span>
          Design Copy,Faster
        </h4>
      </div>
      <form className="margin-top-120">
        <Row className="justify-content-space-between">
          <Col md={5} xs={12}>
            <label for="first-name" className="p1">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="John"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col
            md={{ span: 5, offset: 2 }}
            xs={12}
            className={isMobile ? "margin-top-80" : ""}
          >
            <label for="last-name" className="p1">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Doe"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="justify-content-space-between margin-top-80">
          <Col md={5} xs={12}>
            <label for="email" className="p1">
              Business Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="John.doe@xyz.com"
              value={businessemail}
              onChange={(e) => {
                const val = e.target.value;
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(val) && val !== "") {
                  setEmailValidity(false);
                } else {
                  setEmailValidity(true);
                }
                setBusinessEmail(e.target.value);
              }}
            />
            <p
              style={
                emailValidity
                  ? { display: "none" }
                  : { display: "block", color: "red", fontSize: "12px" }
              }
            >
              Please enter a valid email address
            </p>
          </Col>
          <Col
            md={{ span: 5, offset: 2 }}
            xs={12}
            className={isMobile ? "margin-top-80" : ""}
          >
            <label for="business-name" className="p1">
              Business Name
            </label>
            <input
              id="business-name"
              type="text"
              placeholder="JohnDoe"
              value={businessname}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="justify-content-space-between margin-top-80">
          <Col xs={12}>
            <label for="message" className="p1">
              Message
            </label>
            <input
              type="text"
              id="message"
              placeholder="Write Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Col>
        </Row>
      </form>
      <div className="margin-top-56 p-0"></div>
      <Row
        className={isMobile ? "justify-content-center" : "justify-content-end"}
      >
        <button className="contact-btn margin-top-56">
          <span className={isMobile ? "p4 padding-horizontal-80" : "p4"}>
            SEND
          </span>
        </button>
      </Row>
    </>
  );
}
