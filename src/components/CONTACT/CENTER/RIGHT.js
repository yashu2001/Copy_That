import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
export default function RIGHT() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [businessname, setBusinessName] = useState("");
  const [businessemail, setBusinessEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <h4 className="bold">Let’s Design Copy, Faster</h4>
      <form className="margin-top-120">
        <Row className="justify-content-space-between">
          <Col xs={5}>
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
          <Col xs={{ span: 5, offset: 2 }}>
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
          <Col xs={5}>
            <label for="email" className="p1">
              Business Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="John.doe@xyz.com"
              value={businessemail}
              onChange={(e) => setBusinessEmail(e.target.value)}
            />
          </Col>
          <Col xs={{ span: 5, offset: 2 }}>
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
      <Row className="justify-content-end">
        <button className="contact-btn margin-top-56">
          <span className="p4">SEND</span>
        </button>
      </Row>
    </>
  );
}
