import React from "react";
import SkillIcon from "./SkillIcon";
import "./SkillItem.css";

export default function SkillItem(props) {
  const { type, icons, setAction } = props;
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
          <SkillIcon icon={icon} setAction={setAction} restData={icons} />
        ))}
      </div>
    </div>
  );
}
