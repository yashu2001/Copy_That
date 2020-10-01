import React from "react";
import { Container, Row } from "react-bootstrap";
export default function MobileDesigner({ data }) {
  return (
    <Container className="margin-top-36">
      {data.map((item, idx) => {
        return (
          <div className="margin-bottom-36" key={idx}>
            <p className="p5 text-center">{item.title}</p>
            <p className="p4 margin-bottom-8 text-center">{item.text}</p>
            <img
              src={item.src}
              alt={item.alt}
              className="gif margin-bottom-4"
            />
            <Row>
              <svg
                id="Component_4_1"
                data-name="Component 4 – 1"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="8"
                viewBox="0 0 18 8"
                className="mx-auto"
              >
                <rect
                  id="Rectangle_1557"
                  data-name="Rectangle 1557"
                  width="18"
                  height="8"
                  rx="1"
                  fill="#efcc56"
                />
              </svg>
            </Row>
          </div>
        );
      })}
    </Container>
  );
}
