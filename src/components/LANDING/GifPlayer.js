import React from "react";
export default function GifPlayer({ title }) {
  return (
    <div className="contain-65 mx-auto">
      {title === "designer" ? (
        <>
          <h5 className="bold margin-top-120 text-center">Writers</h5>
          <img
            src="/designer-gif.gif"
            alt="designer's gif"
            className="gif margin-top-56"
          />
        </>
      ) : (
        <>
          <h5 className="bold margin-top-120 text-center">Designers</h5>
          <img
            src="/writer-gif.gif"
            alt="designer's gif"
            className="gif margin-top-56"
          />
        </>
      )}
    </div>
  );
}
