import React from "react";
import { Row, Col } from "react-bootstrap";
export default function RIGHT() {
  return (
    <>
      <h4>Let’s Design Copy, Faster</h4>
      <form className="margin-top-120">
        <Row className="justify-content-space-between">
          <Col xs={5}>
            <label for="first-name" className="p1">
              First Name
            </label>
            <input id="first-name" type="text" placeholder="John" />
          </Col>
          <Col xs={5}>
            <label for="last-name" className="p1">
              Last Name
            </label>
            <input id="last-name" type="text" placeholder="Doe" />
          </Col>
        </Row>
        <Row className="justify-content-space-between margin-top-80">
          <Col xs={5}>
            <label for="email" className="p1">
              Business Email
            </label>
            <input id="email" type="text" placeholder="John.doe@xyz.com" />
          </Col>
          <Col xs={5}>
            <label for="business-name" className="p1">
              Business Name
            </label>
            <input id="business-name" type="text" placeholder="JohnDoe" />
          </Col>
        </Row>
        <Row className="justify-content-space-between margin-top-80">
          <Col xs={10}>
            <label for="message" className="p1">
              Message
            </label>
            <textarea id="message"  placeholder="Write Your Message..." />
          </Col>
        </Row>
      </form>
    </>
  );
}
