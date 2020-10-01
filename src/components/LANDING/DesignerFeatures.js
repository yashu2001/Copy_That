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
              <h6 className="bold">Automatically Sync Copy</h6>
              <p className="p4">
                Copy is automatically synced back to the original artboards
                allowing for an instant review and/or approval.
              </p>
            </Col>
            <Col xs={3} className="full-height">
              <img
                src="/autosync.svg"
                className="gif"
                alt="auto sync"
              />
            </Col>
            <Col
              xs={{ span: 3, offset: 2 }}
              style={{ top: -40, height: "100%" }}
            >
              <Row style={{ height: "50%" }}>
                <img
                  src="/trackProgress.svg"
                  alt="track progress"
                  className="gif"
                />
              </Row>
              <Row style={{ height: "50%" }}>
                <img
                  src="/requestCopy.svg"
                  alt="Request a copy"
                  className="gif"
                  style={{ marginTop: "4vh" }}
                />
              </Row>
            </Col>
            <Col xs={2} style={{ top: -40, height: "100%" }}>
              <Row style={{ height: "50%", marginLeft: "1vw" }}>
                <h6 className="bold">Track Progress</h6>
                <p className="p4">
                  From the beginning to the end of the project each collaborator
                  will have access and ability to review the progress of the
                  design.
                </p>
              </Row>
              <Row
                style={{
                  marginTop: "5vh",
                  height: "50%",
                  marginLeft: "1vw",
                }}
              >
                <h6 className="bold">Request Copy</h6>
                <p className="p4">
                  To request copy simply select the requested text objects
                  within the design file and submit to the writer for editing
                  and content development.
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
