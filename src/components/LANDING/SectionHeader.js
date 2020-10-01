import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
export default function SectionHeader(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <div className="section-header margin-top-120">
      <Container>
        <div className="contain-50 mx-auto">
          <Row>
            <Col xs={4} className="my-auto" style={{ zIndex: 100 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="214"
                height="288"
                viewBox="0 0 214 288"
                className="my-auto"
              >
                <g
                  id="Group_442"
                  data-name="Group 442"
                  transform="translate(0 29.5)"
                >
                  <g id="Group_65" data-name="Group 65">
                    <circle
                      id="Ellipse_20"
                      data-name="Ellipse 20"
                      cx="107"
                      cy="107"
                      r="107"
                      transform="translate(0 23.5)"
                      fill="rgba(144,74,212,0.4)"
                    />
                    <text
                      id="C"
                      transform="translate(93 204.5)"
                      fill="#f6f5f5"
                      fontSize="217"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="-67.177" y="0">
                        C
                      </tspan>
                    </text>
                  </g>
                  <g id="Group_467" data-name="Group 467">
                    <circle
                      id="Ellipse_20-2"
                      data-name="Ellipse 20"
                      cx="107"
                      cy="107"
                      r="107"
                      transform="translate(0 23.5)"
                      fill="rgba(144,74,212,0.4)"
                    />
                    <text
                      id="C-2"
                      data-name="C"
                      transform="translate(93 204.5)"
                      fill="#f6f5f5"
                      fontSize="217"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="-67.177" y="0">
                        C
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </Col>
            {!isMobile ? (
              <Col
                xs={4}
                className="my-auto position-overlay"
                style={{ zIndex: 200 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="174.469"
                  height="26.996"
                  viewBox="0 0 174.469 26.996"
                >
                  <path
                    id="Path_1038"
                    data-name="Path 1038"
                    d="M7.259,44.538A9.407,9.407,0,0,1,7.9,41.067a8.434,8.434,0,0,1,1.793-2.815,8.347,8.347,0,0,1,2.815-1.89,9.5,9.5,0,0,1,3.7-.694A10.728,10.728,0,0,1,18,35.8a8.042,8.042,0,0,1,1.33.328,5.051,5.051,0,0,1,1.118.463l.54-.926q-.617-.27-1.311-.5a14.678,14.678,0,0,0-1.5-.347,11.1,11.1,0,0,0-1.967-.154,10.325,10.325,0,0,0-3.76.694,9.619,9.619,0,0,0-3.162,1.986,9.74,9.74,0,0,0-3.027,7.192,10.126,10.126,0,0,0,.791,4.088,9.221,9.221,0,0,0,2.179,3.1,9.7,9.7,0,0,0,3.239,1.986,11.11,11.11,0,0,0,3.934.694,10.252,10.252,0,0,0,2.083-.193,12.441,12.441,0,0,0,1.581-.424,7.757,7.757,0,0,0,1.311-.617l-.54-.926a4.867,4.867,0,0,1-1.157.578,8.662,8.662,0,0,1-1.388.4,9.1,9.1,0,0,1-1.89.174,10,10,0,0,1-3.818-.694,8.471,8.471,0,0,1-2.873-1.89A8.285,8.285,0,0,1,7.9,48.009,9.407,9.407,0,0,1,7.259,44.538Zm-4.859,0a13.856,13.856,0,0,1,1.08-5.573A12.99,12.99,0,0,1,6.411,34.7a12.768,12.768,0,0,1,4.319-2.719,14.544,14.544,0,0,1,5.245-.945,16.373,16.373,0,0,1,3.914.424,18.493,18.493,0,0,1,2.95.964,13.81,13.81,0,0,1,2.468,1.35l-4.049,7.135a13.624,13.624,0,0,0-1.35-.887,12.949,12.949,0,0,0-1.562-.6,6.78,6.78,0,0,0-2.063-.289,5.568,5.568,0,0,0-3.953,1.581,5.3,5.3,0,0,0-1.176,1.716,5.249,5.249,0,0,0-.424,2.1,5.053,5.053,0,0,0,.443,2.1,5.412,5.412,0,0,0,1.215,1.716A5.754,5.754,0,0,0,14.2,49.513a5.974,5.974,0,0,0,2.275.424,7.206,7.206,0,0,0,2.2-.309,8.052,8.052,0,0,0,1.62-.694,5.947,5.947,0,0,0,1.35-1l4.049,7.135a11.461,11.461,0,0,1-2.468,1.5,20.958,20.958,0,0,1-2.97,1,15.463,15.463,0,0,1-3.972.463,15.282,15.282,0,0,1-5.553-.983,13.092,13.092,0,0,1-4.4-2.757,12.518,12.518,0,0,1-2.892-4.261A14.1,14.1,0,0,1,2.4,44.538Zm22.908,0a13.144,13.144,0,0,1,1.061-5.245A13.491,13.491,0,0,1,33.561,32.1a13.5,13.5,0,0,1,10.49,0,13.491,13.491,0,0,1,7.192,7.192,13.5,13.5,0,0,1,0,10.49,13.491,13.491,0,0,1-7.192,7.192,13.5,13.5,0,0,1-10.49,0,13.491,13.491,0,0,1-7.192-7.192A13.144,13.144,0,0,1,25.308,44.538Zm3.625,0a9.608,9.608,0,0,0,.771,3.837,9.948,9.948,0,0,0,5.264,5.264,9.931,9.931,0,0,0,7.674,0,9.948,9.948,0,0,0,5.264-5.264,9.931,9.931,0,0,0,0-7.674,9.948,9.948,0,0,0-5.264-5.264,9.931,9.931,0,0,0-7.674,0A9.948,9.948,0,0,0,29.7,40.7,9.608,9.608,0,0,0,28.933,44.538Zm4.474,0a5.249,5.249,0,0,0,.424,2.1A5.417,5.417,0,0,0,36.7,49.513a5.419,5.419,0,0,0,4.2,0A5.417,5.417,0,0,0,43.78,46.64a5.419,5.419,0,0,0,0-4.2,5.417,5.417,0,0,0-2.873-2.873,5.419,5.419,0,0,0-4.2,0,5.417,5.417,0,0,0-2.873,2.873A5.249,5.249,0,0,0,33.406,44.538Zm5.4,8.87a8.58,8.58,0,0,1-3.452-.694,9.027,9.027,0,0,1-4.724-4.724,8.928,8.928,0,0,1,0-6.9,9.027,9.027,0,0,1,4.724-4.724,8.928,8.928,0,0,1,6.9,0,9.027,9.027,0,0,1,4.724,4.724,8.928,8.928,0,0,1,0,6.9,9.027,9.027,0,0,1-4.724,4.724A8.58,8.58,0,0,1,38.806,53.408ZM73.668,41.453a10.135,10.135,0,0,1-.926,4.531,8.09,8.09,0,0,1-2.526,3.027,10.837,10.837,0,0,1-3.741,1.7,18.8,18.8,0,0,1-4.609.54V57.38H53.653V31.657h8.214a18.8,18.8,0,0,1,4.609.54,10.837,10.837,0,0,1,3.741,1.7,8.09,8.09,0,0,1,2.526,3.027A10.135,10.135,0,0,1,73.668,41.453Zm-3.741,0a7.016,7.016,0,0,0-.6-3.008,5.454,5.454,0,0,0-1.678-2.083,7.525,7.525,0,0,0-2.565-1.215,12.205,12.205,0,0,0-3.22-.4H57.51V54.295h1V48.163h3.355a12.205,12.205,0,0,0,3.22-.4,7.525,7.525,0,0,0,2.565-1.215,5.454,5.454,0,0,0,1.678-2.083A7.016,7.016,0,0,0,69.928,41.453Zm-1.08,0a6,6,0,0,1-.578,2.777A4.719,4.719,0,0,1,66.727,46a6.5,6.5,0,0,1-2.217.945,11.718,11.718,0,0,1-2.642.289H58.512V35.668h3.355a11.718,11.718,0,0,1,2.642.289,6.5,6.5,0,0,1,2.217.945,4.719,4.719,0,0,1,1.543,1.774A6,6,0,0,1,68.848,41.453Zm-6.98,2.854h.347a3.1,3.1,0,0,0,2.333-.752,3.453,3.453,0,0,0,0-4.2,3.1,3.1,0,0,0-2.333-.752h-.347Zm18.82,2.005L72.7,31.657h9.14l2.97,5.438,2.931-5.438h9.14L88.9,46.312V57.38H80.687Zm4.628,7.983V45.078l5.631-10.335h-1.2l-4.936,9.14-4.975-9.14H78.682l5.592,10.335v9.217Zm14.77-15.889H95.342V31.657h17.971v6.749H108.57V57.38h-8.484Zm4.743,15.889V35.668h5.515v-.926H98.312v.926h5.515V54.295Zm9.063-22.638h8.214v8.754H126.7V31.657h8.253V57.38H126.7V47.854h-4.589V57.38h-8.214Zm4.859,22.638V44.538h11.338v9.757h1V34.742h-1v8.87H118.751v-8.87h-1V54.295Zm25.762-22.638h6.17L160.44,57.38h-8.1l-.848-2.314H143.7l-.848,2.314h-8.1Zm4.821,17.74L147.6,44.885,145.862,49.4Zm-8.831,4.9.733-1.928h12.726l.733,1.928h1.08l-7.443-19.553h-1.465l-7.443,19.553Zm7.1-18.627,6.016,15.773H141.582Zm16.043,2.738H158.9V31.657h17.971v6.749h-4.744V57.38h-8.484Zm4.744,15.889V35.668H173.9v-.926H161.867v.926h5.515V54.295Z"
                    transform="translate(-2.4 -31.04)"
                    fill="#f6f5f5"
                  />
                </svg>
              </Col>
            ) : (
              <></>
            )}
            <div
              className="my-auto  pl-1"
              style={{ whiteSpace: "no-wrap", zIndex: 1000 }}
            >
              <p className="section-title" style={{ display: "inline-block" }}>
                {props.title}
              </p>
              <img
                src="/Cursor 2.png"
                alt="small cursor"
                style={{ display: "inline-block", marginLeft: "2vw" }}
                className="mb-4"
              />
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
