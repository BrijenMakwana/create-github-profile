import React from "react";
import "./UITextInput.css";
import { colorScheme } from "../color/color";

export default function UITextInput(props) {
  const {
    inputLabel,
    emoji,
    inputPlaceholder,
    isTextArea = false,
    isLinkAvailable = false,
  } = props;

  return (
    <div className="text-input-container">
      <label
        className="text-input-label"
        style={{ color: colorScheme["dark"].primary }}
      >
        <span className="text-input-emoji">{emoji}</span>
        {inputLabel}:
      </label>
      {isTextArea ? (
        <textarea
          placeholder={inputPlaceholder}
          className="text-input"
          rows={2}
        />
      ) : (
        <input
          type="text"
          placeholder={inputPlaceholder}
          className="text-input"
        />
      )}
      {isLinkAvailable && (
        <input type="text" className="text-input" placeholder="http://" />
      )}
    </div>
  );
}
