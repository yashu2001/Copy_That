import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
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
        <h4 className={isMobile ? "text-center" : ""}>
          <span className={isMobile ? "active-span-header" : ""}>
            Frequently{" "}
          </span>
          Asked Questions
        </h4>
      </div>
    </>
  );
}
