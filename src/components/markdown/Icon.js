import React from "react";

export default function Icon(props) {
  const { iconName, link, path } = props;
  return (
    <>
      {`<a href="${link}" target="_blank" rel="noreferrer">
        <img
          src="${path}"
          width="35"
          height="35"
          alt="${iconName}"
        />
      </a>`}
    </>
  );
}
