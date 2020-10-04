import React from "react";
import { Row, Col } from "react-bootstrap";
export default function WriterFeatures() {
  return (
    <>
      <div
        className="margin-top-80 contain-90 mx-auto margin-bottom-100"
        style={{ position: "relative" }}
      >
        <div className="contain-50 mx-auto">
          <img className="gif" src="/artboard.svg" alt="features backdrop" />
        </div>
        <div
          style={{
            position: "absolute",
            top: 10,
            width: "100%",
            height: "100%",
          }}
        >
          <Row className="full-height">
            <Col xs={2} className="full-height">
              <h6 className="bold">Dedicated workspace</h6>
              <p className="p4">
                A dedicated work space for all edits and content creation which
                eliminates the need for multiple files.
              </p>
            </Col>
            <Col xs={3} className="full-height">
              <img
                src="/EditorList.png"
                className="gif"
                alt="editor list"
              />
            </Col>
            <Col
              xs={{ span: 3, offset: 2 }}
              style={{ top: -40, height: "100%" }}
            >
              <Row style={{ height: "50%" }}>
                <img
                  src="/writerDraft.png"
                  alt="writers draft"
                  className="gif"
                />
              </Row>
              <Row style={{ height: "50%" }}>
                <img
                  src="/one click.svg"
                  alt="One click content"
                  className="gif"
                  style={{ marginLeft: "5vw", marginTop: "4vh" }}
                />
              </Row>
            </Col>
            <Col xs={2} style={{ top: -40, height: "100%" }}>
              <Row style={{ height: "50%", marginLeft: "1vw" }}>
                <h6 className="bold">Preview Copy In Real Time</h6>
                <p className="p4">
                  Visualize and preview copy in real time making edits,
                  feedback, and content creation seamless.
                </p>
              </Row>
              <Row
                style={{ marginTop: "4vh", height: "50%", marginLeft: "1vw" }}
              >
                <h6 className="bold">One Click Content Handoff</h6>
                <p className="p4">
                  Handoff copy with one click of a button. Once synced the
                  content is available for immediate review and design updates.
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
