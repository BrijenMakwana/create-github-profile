import React from "react";

export default function Paragraph(props) {
  const { text } = props;
  if (!text) return null;

  return <p>{text}</p>;
}
