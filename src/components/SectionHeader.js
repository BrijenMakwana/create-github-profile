import React from "react";
import "./SectionHeader.css";

export default function SectionHeader(props) {
  const { heading, description } = props;
  return (
    <div className="section-header-container">
      <h2 className="section-heading">{heading}</h2>
      <h4 className="section-description">{description}</h4>
    </div>
  );
}
