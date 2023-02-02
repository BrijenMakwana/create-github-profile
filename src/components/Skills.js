import React, { useContext } from "react";
import "./Skills.css";
import { ProfileContext } from "../App";
import SkillItem from "./SkillItem";

export default function Skills() {
  const {
    core,
    setCore,
    frontend,
    setFrontend,
    backend,
    setBackend,
    other,
    setOther,
    software,
    setSoftware,
    web3,
    setWeb3,
  } = useContext(ProfileContext);
  return (
    <div className="skills-container">
      <SkillItem type="core" icons={core} setAction={setCore} />
      <SkillItem type="fronted" icons={frontend} setAction={setFrontend} />
      <SkillItem type="backend" icons={backend} setAction={setBackend} />
      <SkillItem type="other" icons={other} setAction={setOther} />
      <SkillItem type="software" icons={software} setAction={setSoftware} />
      <SkillItem type="web3" icons={web3} setAction={setWeb3} />
    </div>
  );
}
