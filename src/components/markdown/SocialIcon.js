import React from "react";

export default function Socialicon(props) {
  const { linkValue, iconName, link } = props;

  if (!linkValue) return null;
  return (
    <>
      {`<a href="${link}" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/socials/${iconName}.svg"
            width="38"
            height="38"
            alt="${iconName}"
          />
        </a>`}
    </>
  );
}
