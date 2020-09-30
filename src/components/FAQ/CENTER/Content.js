import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Accordion,
  Card,
  Row,
  Col,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <img
      src={isCurrentEventKey ? "/Close.svg" : "/Open.svg"}
      alt="toggle icon"
      onClick={decoratedOnClick}
    />
  );
}
export default function Content() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const data = [
    {
      question: [
        { text: "What is ", highlight: false },
        { text: "CopyThat", highlight: true },
        { text: "?", highlight: false },
      ],
      answer:
        "CopyThat is a Co-Design Copy Visualization and Handoff tool for writers and designers to collaborate in real-time for immediate preview of copy allowing for seamless edits, feedback, and design tweeks; producing faster more efficient projects with less back and forth.",
    },
    {
      question: [
        { text: "Who should use", highlight: false },
        { text: " Copy That", highlight: true },
        { text: "?", highlight: false },
      ],
      answer:
        "Writers and designers working together and creating websites, apps, or any web product should use CopyThat. CopyThat allows for designers to work more collaboratively on projects with real-time instant project visualization creating a seamless time efficient work flow. ",
    },
    {
      question: [
        { text: "Writers", highlight: true },
        { text: ": What problem does it solve?", highlight: false },
      ],
      answer:
        "CopyThat brings writers into the design experience. This allows writers to instantly write within the website, app, ebook, or web product in conjunction with a designer. The writer will instantly be aware of the content’s wordcount, line breaks, text sizes, etc. that may alter the project’s design. CopyThat also reduces the tedious cycle of revise and submit. No more writing blindly.",
    },
    {
      question: [
        { text: "Designers", highlight: true },
        { text: ": What problem does it solve?", highlight: false },
      ],
      answer:
        "It saves time by allowing the writer to see the actual design in real time creating a better co-designing understanding of the project. The writer sees the design from the designer’s point of view and is then able to integrate content. Consequently, reducing the constant modify and submit process of creating a digital project. It also prevents disrupting design workflows with the elimination of tasks like compiling screenshots or copying and pasting text.  Plus, no more waiting around for content.",
    },
  ];
  if (isMobile) {
    return (
      <Accordion>
        {data.map((entry, idx) => (
          <>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={String(idx)}>
                <Row>
                  <Col xs={10} className="text-left">
                    <p className="p1 bold">
                      {entry.question.map((part) => {
                        return part.highlight ? (
                          <span className="highlight">{part.text}</span>
                        ) : (
                          part.text
                        );
                      })}
                    </p>
                  </Col>
                  <Col xs={2} className="text-right">
                    <ContextAwareToggle eventKey={String(idx)} />
                  </Col>
                </Row>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={String(idx)}>
                <Card.Body>{entry.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </>
        ))}
      </Accordion>
    );
  }
  return (
    <>
      {data.map((entry) => (
        <div className="margin-top-56">
          <p className="p1 bold">
            {entry.question.map((part) => {
              return part.highlight ? (
                <span className="highlight">{part.text}</span>
              ) : (
                part.text
              );
            })}
          </p>
          <p className="margin-top-24">{entry.answer}</p>
        </div>
      ))}
    </>
  );
}
