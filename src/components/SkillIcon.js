import React, { useState } from "react";
import "./SkillIcon.css";
import { colorScheme } from "../color/color";

export default function SkillIcon(props) {
  const { icon, setAction, restData } = props;

  const toggleSelection = () => {
    setAction(
      restData.map((item) => {
        if (item.name === icon.name) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div
      className="skill-icon-container"
      onClick={toggleSelection}
      style={{
        backgroundColor: icon.isSelected
          ? colorScheme["dark"].font
          : "transparent",
        borderColor: icon.isSelected
          ? colorScheme["dark"].primary
          : "transparent",
        borderWidth: 3,
        borderStyle: "solid",
      }}
    >
      <img src={icon.path} alt={icon.name} className="icon-image" />
    </div>
  );
}
