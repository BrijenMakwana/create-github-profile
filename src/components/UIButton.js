import React from "react";
import "./UIButton.css";

export default function UIButton(props) {
  const { text, btnAction, shouldVisible } = props;
  return (
    <div
      className="btn-container"
      onClick={btnAction}
      style={{ visibility: shouldVisible ? "visible" : "hidden" }}
    >
      <span className="btn-text">{text}</span>
    </div>
  );
}
