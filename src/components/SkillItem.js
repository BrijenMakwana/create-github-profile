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
          <a href={icon.link} key={icon.name} target="blank" title={icon.name}>
            <img src={icon.path} alt={icon.name} className="icon-image" />
          </a>
        ))}
      </div>
    </div>
  );
}
