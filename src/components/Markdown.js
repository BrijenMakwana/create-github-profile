import React, { useContext, useRef } from "react";
import "./Markdown.css";
import { ProfileContext } from "../App";
import Heading from "./markdown/Heading";
import Paragraph from "./markdown/Paragraph";
import Li from "./markdown/Li";
import Icon from "./markdown/Icon";
import SocialIcon from "./markdown/SocialIcon";

export let markdownRef = null;

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
    githubLink,
    twitterLink,
    hashnodeLink,
    mediumLink,
    devtoLink,
    linkedinLink,
    polyworkLink,
    twitchLink,
    youtubeLink,
    discordLink,
    instagramLink,
    facebookLink,
    dribbleLink,
    behanceLink,
    codesandboxLink,
    codepenLink,
    stackoverflowLink,
    rssLink,
    buyMeCoffeeLink,
  } = useContext(ProfileContext);

  markdownRef = useRef(null);

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
      {(core.some((item) => item.isSelected) ||
        frontend.some((item) => item.isSelected) ||
        backend.some((item) => item.isSelected) ||
        other.some((item) => item.isSelected) ||
        software.some((item) => item.isSelected) ||
        web3.some((item) => item.isSelected)) && (
        <Heading headingValue="Skills" type={3} />
      )}
      <p>
        {core
          .filter((item) => item.isSelected)
          .map((item) => (
            <Icon
              iconName={item.name}
              link={item.link}
              path={item.path}
              key={item.iTag}
            />
          ))}
        {frontend
          .filter((item) => item.isSelected)
          .map((item) => (
            <Icon
              iconName={item.name}
              link={item.link}
              path={item.path}
              key={item.iTag}
            />
          ))}
        {backend
          .filter((item) => item.isSelected)
          .map((item) => (
            <Icon
              iconName={item.name}
              link={item.link}
              path={item.path}
              key={item.iTag}
            />
          ))}
        {other
          .filter((item) => item.isSelected)
          .map((item) => (
            <Icon
              iconName={item.name}
              link={item.link}
              path={item.path}
              key={item.iTag}
            />
          ))}
        {software
          .filter((item) => item.isSelected)
          .map((item) => (
            <Icon
              iconName={item.name}
              link={item.link}
              path={item.path}
              key={item.iTag}
            />
          ))}
        {web3
          .filter((item) => item.isSelected)
          .map((item) => (
            <Icon
              iconName={item.name}
              link={item.link}
              path={item.path}
              key={item.iTag}
            />
          ))}
      </p>
      {(githubLink ||
        twitterLink ||
        hashnodeLink ||
        mediumLink ||
        devtoLink ||
        linkedinLink ||
        polyworkLink ||
        twitchLink ||
        youtubeLink ||
        discordLink ||
        instagramLink ||
        facebookLink ||
        dribbleLink ||
        behanceLink ||
        codesandboxLink ||
        codepenLink ||
        stackoverflowLink ||
        rssLink) && <Heading headingValue="Socials" type={3} />}
      <p>
        <SocialIcon
          linkValue={githubLink}
          iconName="github-dark"
          link={`https://github.com/${githubLink}`}
        />
        <SocialIcon
          linkValue={twitterLink}
          iconName="twitter"
          link={`https://twitter.com/${twitterLink}`}
        />
        <SocialIcon
          linkValue={hashnodeLink}
          iconName="hashnode"
          link={`https://${hashnodeLink}.hashnode.dev`}
        />
        <SocialIcon
          linkValue={mediumLink}
          iconName="medium-dark"
          link={`http://medium.com/${mediumLink}`}
        />
        <SocialIcon
          linkValue={devtoLink}
          iconName="devdotto-dark"
          link={`https://dev.to.com/${devtoLink}`}
        />
        <SocialIcon
          linkValue={linkedinLink}
          iconName="linkedin"
          link={`https://www.linkedin.com/in/${linkedinLink}`}
        />
        <SocialIcon
          linkValue={polyworkLink}
          iconName="polywork"
          link={`https://polywork.com/${polyworkLink}`}
        />
        <SocialIcon
          linkValue={twitchLink}
          iconName="twitch"
          link={`https://twitch.tv/${twitchLink}`}
        />
        <SocialIcon
          linkValue={youtubeLink}
          iconName="youtube"
          link={`https://www.youtube.com/c/${youtubeLink}`}
        />
        <SocialIcon
          linkValue={discordLink}
          iconName="discord"
          link={`https://discord.com/users/${discordLink}`}
        />
        <SocialIcon
          linkValue={instagramLink}
          iconName="instagram"
          link={`https://instagram.com/${instagramLink}`}
        />
        <SocialIcon
          linkValue={facebookLink}
          iconName="facebook"
          link={`https://facebook.com/${facebookLink}`}
        />
        <SocialIcon
          linkValue={dribbleLink}
          iconName="dribbble"
          link={`https://dribbble.com/${discordLink}`}
        />
        <SocialIcon
          linkValue={behanceLink}
          iconName="behance"
          link={`https://behance.com/${behanceLink}`}
        />
        <SocialIcon
          linkValue={codesandboxLink}
          iconName="codesandbox-dark"
          link={`https://codesandbox.io/u/${codesandboxLink}`}
        />
        <SocialIcon
          linkValue={codepenLink}
          iconName="codepen-dark"
          link={`https://codepen.io/${codepenLink}`}
        />
        <SocialIcon
          linkValue={stackoverflowLink}
          iconName="stackoverflow"
          link={`https://www.stackoverflow.com/users/${stackoverflowLink}`}
        />
        <SocialIcon
          linkValue={rssLink}
          iconName="rss"
          link={`https://${rssLink}`}
        />
      </p>
      {buyMeCoffeeLink && <Heading headingValue="Support Me" type={3} />}

      {buyMeCoffeeLink && (
        <>
          {`
          <a href="https://www.buymeacoffee.com/${buyMeCoffeeLink}" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              width="170"
              alt="${buyMeCoffeeLink}"
            />
          </a>
          `}
        </>
      )}
    </div>
  );
}
