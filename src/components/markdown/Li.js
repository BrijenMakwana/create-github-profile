import React from "react";

export default function Li(props) {
  const { text, value, link = undefined } = props;
  if (!value) return null;

  return (
    <>
      - {text} {link ? `[${value}](${link})` : value}
      <br />
    </>
  );
}
