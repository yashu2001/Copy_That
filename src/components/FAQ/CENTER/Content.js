import React from "react";

export default function Content() {
  const data = [
    {
      question: "What is CopyThat?",
      answer:
        "CopyThat is a Co-Design Copy Visualization and Handoff tool for writers and designers to collaborate in real-time for immediate preview of copy allowing for seamless edits, feedback, and design tweeks; producing faster more efficient projects with less back and forth.",
    },
    {
      question: "Who should use Copy That?",
      answer:
        "Writers and designers working together and creating websites, apps, or any web product should use CopyThat. CopyThat allows for designers to work more collaboratively on projects with real-time instant project visualization creating a seamless time efficient work flow. ",
    },
    {
      question: "What problem does it solve for writers?",
      answer:
        "CopyThat brings writers into the design experience. This allows writers to instantly write within the website, app, ebook, or web product in conjunction with a designer. The writer will instantly be aware of the content’s wordcount, line breaks, text sizes, etc. that may alter the project’s design. CopyThat also reduces the tedious cycle of revise and submit. No more writing blindly.",
    },
    {
      question: "What problem does it solve for designers? ",
      answer:
        "It saves time by allowing the writer to see the actual design in real time creating a better co-designing understanding of the project. The writer sees the design from the designer’s point of view and is then able to integrate content. Consequently, reducing the constant modify and submit process of creating a digital project. It also prevents disrupting design workflows with the elimination of tasks like compiling screenshots or copying and pasting text.  Plus, no more waiting around for content.",
    },
  ];
  return (
    <>
      {data.map((entry) => (
        <div className="margin-top-56">
          <p className="p1 bold">{entry.question}</p>
          <p className="margin-top-24">{entry.answer}</p>
        </div>
      ))}
    </>
  );
}
