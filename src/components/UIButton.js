import React from "react";
import "./UIButton.css";
import { colorScheme } from "../color/color";

// onMouse change colors
export default function UIButton(props) {
  const { text, btnAction, shouldVisible } = props;
  return (
    <div
      className="btn-container"
      onClick={btnAction}
      style={{
        visibility: shouldVisible ? "visible" : "hidden",
        backgroundColor: colorScheme["dark"].primary,
      }}
    >
      <span className="btn-text">{text}</span>
    </div>
  );
}
