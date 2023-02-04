import React from "react";

export default function Heading(props) {
  const { headingStart = undefined, headingValue, type } = props;

  if (!headingValue) return null;

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((item) => {
        if (item <= type) {
          return "#";
        } else {
          return null;
        }
      })}
      {headingStart} {headingValue}
    </>
  );
}
