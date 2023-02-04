import React, { useContext, useRef } from "react";
import "./Markdown.css";
import { ProfileContext } from "../App";
import Heading from "./markdown/Heading";
import Paragraph from "./markdown/Paragraph";
import Li from "./markdown/Li";
import Icon from "./markdown/Icon";

export default function Markdown() {
  const {
    name,
    subtitle,
    description,
    location,
    portfolioName,
    portfolioLink,
    email,
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
  const markdownRef = useRef(null);
  // console.log(markdownRef?.current?.innerHTML);
  return (
    <div className="markdown-wrapper" ref={markdownRef}>
      <Heading headingStart="Hi 👋🏻 My name is" headingValue={name} type={1} />
      <Heading headingValue={subtitle} type={5} />
      <Paragraph text={description} />
      <Li text="🌍 I'm based in" value={location} />
      <Li
        text="🖥️ See my portfolio at"
        value={portfolioName}
        link={portfolioLink}
      />
      <Li
        text="✉️ You can contact me at"
        value={email}
        link={`mailto:${email}`}
      />
      <Li
        text="🚀 I'm currently working on"
        value={workingName}
        link={workingLink}
      />
      <Li text="🧠 I'm learning" value={learning} />
      <Li text="🤝 I'm open to collaborating" value={collaborate} />
      <Li text="⚡" value={anything} />

      <Heading headingValue="Skills" type={3} />

      {core
        .filter((item) => item.isSelected)
        .map((item) => (
          <Icon iconName={item.name} link={item.link} path={item.path} />
        ))}
      {frontend
        .filter((item) => item.isSelected)
        .map((item) => (
          <Icon iconName={item.name} link={item.link} path={item.path} />
        ))}
      {backend
        .filter((item) => item.isSelected)
        .map((item) => (
          <Icon iconName={item.name} link={item.link} path={item.path} />
        ))}
      {other
        .filter((item) => item.isSelected)
        .map((item) => (
          <Icon iconName={item.name} link={item.link} path={item.path} />
        ))}
      {software
        .filter((item) => item.isSelected)
        .map((item) => (
          <Icon iconName={item.name} link={item.link} path={item.path} />
        ))}
      {web3
        .filter((item) => item.isSelected)
        .map((item) => (
          <Icon iconName={item.name} link={item.link} path={item.path} />
        ))}
    </div>
  );
}
