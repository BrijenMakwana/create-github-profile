import React from "react";
import "./SkillItem.css";

export default function SkillItem(props) {
  const { type, icons } = props;
  return (
    <div className="skill-container">
      {/* skill heading */}
      <h5 className="skill-type">
        <span className="skill-emoji">🖥</span>
        {type}
      </h5>
      {/* icons */}
      <div className="icons-container">
        {icons.map((icon) => (
          <img
            src="https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/skills/src/assets/skills/aave-colored.svg"
            alt="ex"
            className="icon-image"
          />
        ))}
      </div>
    </div>
  );
}
