import React from "react";

export default function Li(props) {
  const { text, value, link = undefined } = props;
  if (!value) return null;
  // TODO: link should be entered to display in markdown
  return (
    <>
      - {text} {link ? `[${value}](${link})` : value}
    </>
  );
}
