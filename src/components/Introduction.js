import React, { useContext } from "react";
import "./Introduction.css";
import UITextInput from "./UITextInput";
import { ProfileContext } from "../App";

export default function Introduction() {
  const {
    name,
    setName,
    subtitle,
    setSubtitle,
    description,
    setDescription,
    location,
    setLocation,
    email,
    setEmail,
    learning,
    setLearning,
    collaborate,
    setCollaborate,
    anything,
    setAnything,
    portfolioName,
    setPortfolioName,
    portfolioLink,
    setPortfolioLink,
    workingName,
    setWorkingName,
    workingLink,
    setWorkingLink,
  } = useContext(ProfileContext);

  return (
    <div className="introduction-container">
      <UITextInput
        inputLabel="HI! MY NAME IS"
        emoji="👋🏻"
        inputPlaceholder="Brijen Makwana"
        inputAction={setName}
        inputValue={name}
      />
      <UITextInput
        inputLabel="SUBTITLE"
        emoji="💡"
        inputPlaceholder="Mobile Developer"
        inputAction={setSubtitle}
        inputValue={subtitle}
      />
      <UITextInput
        inputLabel="LONG DESCRIPTION"
        emoji="✏️"
        inputPlaceholder="eg: I have learning coding for 5 years now. I'm a mobile and web developer works with React and react Native"
        isTextArea={true}
        inputAction={setDescription}
        inputValue={description}
      />
      <UITextInput
        inputLabel="I'M BASED IN"
        emoji="🌍"
        inputPlaceholder="India"
        inputAction={setLocation}
        inputValue={location}
      />
      <UITextInput
        inputLabel="SEE MY PORTFOLIO"
        emoji="🖥"
        inputPlaceholder="brijenmakwana.vercel.app"
        isLinkAvailable={true}
        inputAction={setPortfolioName}
        inputValue={portfolioName}
        linkAction={setPortfolioLink}
        linkValue={portfolioLink}
      />
      <UITextInput
        inputLabel="CONTACT ME AT"
        emoji="✉️"
        inputPlaceholder="mymail@email.com"
        inputValue={email}
        inputAction={setEmail}
      />
      <UITextInput
        inputLabel="I'M CURRENTLY WORKING ON"
        emoji="🚀"
        inputPlaceholder="MyApp"
        isLinkAvailable={true}
        inputAction={setWorkingName}
        inputValue={workingName}
        linkAction={setWorkingLink}
        linkValue={workingLink}
      />
      <UITextInput
        inputLabel="I'M CURRENTLY LEARNING"
        emoji="🧠"
        inputPlaceholder="Machine Learning"
        inputAction={setLearning}
        inputValue={learning}
      />
      <UITextInput
        inputLabel="I'M OPEN TO COLLABORATING ON"
        emoji="🤝"
        inputPlaceholder="interesting project"
        inputAction={setCollaborate}
        inputValue={collaborate}
      />
      <UITextInput
        inputLabel="ANYTHING ELSE"
        emoji="⚡️"
        inputPlaceholder="xbox gamer and a reader"
        inputAction={setAnything}
        inputValue={anything}
      />
    </div>
  );
}
