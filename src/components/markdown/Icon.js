import React from "react";

export default function Icon(props) {
  const { iconName, link, path } = props;
  return (
    <>
      {`<a href="${link}" target="_blank" rel="noreferrer">
        <img
          src="${path}"
          width="36"
          height="36"
          alt="${iconName}"
        />
      </a>`}
    </>
  );
}
