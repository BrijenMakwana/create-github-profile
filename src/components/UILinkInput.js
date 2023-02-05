import React from "react";
import "./UILinkInput.css";
import { colorScheme } from "../color/color";

export default function UILinkInput(props) {
  const { linkLabel, startLink, icon, linkValue, linkAction } = props;

  return (
    <div className="link-input-container">
      {/* label */}
      <label className="link-input-label-container">
        <img
          src={`https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/socials/${icon}.svg`}
          alt={linkLabel}
          className="link-input-icon"
        />
        <span
          className="link-input-label"
          style={{ color: colorScheme["dark"].primary }}
        >
          {linkLabel}
        </span>
      </label>
      {/* input */}
      <div
        className="link-text-container"
        style={{ backgroundColor: colorScheme["dark"].secondary }}
      >
        <span
          className="link-start"
          style={{ color: colorScheme["dark"].font }}
        >
          {startLink}/
        </span>
        <input
          type="text"
          className="link-text-input"
          style={{ color: colorScheme["dark"].font }}
          placeholder="yourname"
          onChange={(e) => linkAction(e.target.value)}
          value={linkValue}
        />
      </div>
    </div>
  );
}
