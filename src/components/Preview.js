import React, { useContext } from "react";
import "./Preview.css";
import { ProfileContext } from "../App";

const SkillIconsList = (props) => {
  const { icons } = props;
  return (
    <>
      {icons
        .filter((item) => item.isSelected)
        .map((skill) => (
          <img
            src={skill.path}
            alt={skill.name}
            className="preview-icon-image"
            key={skill.iTag}
          />
        ))}
    </>
  );
};

export default function Preview() {
  const {
    name,
    subtitle,
    description,
    location,
    email,
    portfolioName,
    portfolioLink,
    workingName,
    workingLink,
    learning,
    collaborate,
    anything,
    core,
    frontend,
    backend,
    other,
    software,
    web3,
  } = useContext(ProfileContext);
  return (
    <div className="preview-wrapper">
      {/* introduction */}
      {/* user name */}
      {name && <h1 className="preview-name">Hi My name is {name}</h1>}

      {/* subtitle */}
      {subtitle && <h2 className="preview-subtitle">{subtitle}</h2>}

      {/* description */}
      {description && <p className="preview-description">{description}</p>}

      {/* about */}
      <ul className="preview-ul">
        {/* location */}
        {location && (
          <li className="preview-li">🌍 &nbsp; I'm based in {location}</li>
        )}
        {/* portfolio */}
        {portfolioName && portfolioLink && (
          <li className="preview-li">
            🖥️ &nbsp; See my portfolio at
            <a href={portfolioLink} className="preview-link" target="blank">
              {portfolioName}
            </a>
          </li>
        )}
        {/* contact */}
        {email && (
          <li className="preview-li">
            ✉️ &nbsp; You can contact me at
            <a href={`mailto:${email}`} className="preview-link">
              {email}
            </a>
          </li>
        )}
        {/* working on */}
        {workingName && workingLink && (
          <li className="preview-li">
            🚀 &nbsp; I'm currently working on
            <a href={workingLink} className="preview-link" target="blank">
              {workingName}
            </a>
          </li>
        )}
        {/* learning */}
        {learning && (
          <li className="preview-li">🧠 &nbsp; I'm learning {learning}</li>
        )}
        {/* collaborate */}
        {collaborate && (
          <li className="preview-li">
            🤝 &nbsp; I'm open to collaborating {collaborate}
          </li>
        )}
        {/* anything else */}
        {anything && <li className="preview-li">⚡ &nbsp; {anything}</li>}
      </ul>

      {/* skills */}
      {(core.some((item) => item.isSelected) ||
        frontend.some((item) => item.isSelected) ||
        backend.some((item) => item.isSelected) ||
        other.some((item) => item.isSelected) ||
        software.some((item) => item.isSelected) ||
        web3.some((item) => item.isSelected)) && (
        <>
          <h3 className="preview-skills-heading">skills</h3>
          <div className="preview-skills-container">
            <SkillIconsList icons={core} />
            <SkillIconsList icons={frontend} />
            <SkillIconsList icons={backend} />
            <SkillIconsList icons={other} />
            <SkillIconsList icons={software} />
            <SkillIconsList icons={web3} />
          </div>
        </>
      )}
    </div>
  );
}
