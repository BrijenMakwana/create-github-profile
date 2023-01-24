import React from "react";
import "./Skills.css";
import { skillsIconData } from "../data/data";
import SkillItem from "./SkillItem";

export default function Skills() {
  return (
    <div className="skills-container">
      <SkillItem type="CORE" icons={skillsIconData.core} />
      <SkillItem type="FRONTEND" icons={skillsIconData.frontend} />
      <SkillItem type="BACKEND AND DATABASE" icons={skillsIconData.backend} />
      <SkillItem type="OTHER" icons={skillsIconData.other} />
      <SkillItem type="SOFTWARE" icons={skillsIconData.software} />
      <SkillItem type="WEB3" icons={skillsIconData.web3} />
    </div>
  );
}
