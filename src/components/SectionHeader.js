import React from "react";
import "./SectionHeader.css";
import { colorScheme } from "../color/color";

export default function SectionHeader(props) {
  const { heading, description } = props;
  return (
    <div className="section-header-container">
      <h2
        className="section-heading"
        style={{ color: colorScheme["dark"].font }}
      >
        {heading}
      </h2>
      <h4
        className="section-description"
        style={{ color: colorScheme["dark"].font }}
      >
        {description}
      </h4>
    </div>
  );
}
