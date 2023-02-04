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

const SocialLink = (props) => {
  const { linkValue, iconName, link } = props;
  if (!linkValue) return null;

  return (
    <a href={link} target="blank" className="preview-social-link">
      <img
        src={`https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/socials/${iconName}.svg`}
        alt={iconName}
        className="preview-social-icon"
      />
    </a>
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
  } = useContext(ProfileContext);
  return (
    <div className="preview-wrapper">
      {/* introduction */}
      {/* user name */}
      {name && <h1 className="preview-name">Hi 👋🏻 My name is {name}</h1>}

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

      {/* socials */}
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
        rssLink) && <h3 className="preview-socials-heading">socials</h3>}

      <div className="preview-socials-container">
        <SocialLink
          linkValue={githubLink}
          iconName="github-dark"
          link={`https://github.com/${githubLink}`}
        />
        <SocialLink
          linkValue={twitterLink}
          iconName="twitter"
          link={`https://twitter.com/${twitterLink}`}
        />
        <SocialLink
          linkValue={hashnodeLink}
          iconName="hashnode"
          link={`http://hashnode.com/${hashnodeLink}`}
        />
        <SocialLink
          linkValue={mediumLink}
          iconName="medium-dark"
          link={`https://medium.com/${mediumLink}`}
        />
        <SocialLink
          linkValue={devtoLink}
          iconName="devdotto-dark"
          link={`https://dev.to.com/${devtoLink}`}
        />{" "}
        <SocialLink
          linkValue={linkedinLink}
          iconName="linkedin"
          link={`https://www.linkedin.com/in/${linkedinLink}`}
        />{" "}
        <SocialLink
          linkValue={polyworkLink}
          iconName="polywork"
          link={`https://polywork.com/${polyworkLink}`}
        />{" "}
        <SocialLink
          linkValue={twitchLink}
          iconName="twitch"
          link={`https://twitch.tv/${twitchLink}`}
        />{" "}
        <SocialLink
          linkValue={youtubeLink}
          iconName="youtube"
          link={`https://www.youtube.com/c/${youtubeLink}`}
        />
        <SocialLink
          linkValue={discordLink}
          iconName="discord"
          link={`https://discord.com/users/${discordLink}`}
        />
        <SocialLink
          linkValue={instagramLink}
          iconName="instagram"
          link={`https://instagram.com/${instagramLink}`}
        />
        <SocialLink
          linkValue={facebookLink}
          iconName="facebook"
          link={`https://facebook.com/${facebookLink}`}
        />
        <SocialLink
          linkValue={dribbleLink}
          iconName="dribbble"
          link={`https://dribbble.com/${discordLink}`}
        />
        <SocialLink
          linkValue={behanceLink}
          iconName="behance"
          link={`https://behance.com/${behanceLink}`}
        />
        <SocialLink
          linkValue={codesandboxLink}
          iconName="codesandbox-dark"
          link={`https://codesandbox.io/u/${codesandboxLink}`}
        />
        <SocialLink
          linkValue={codepenLink}
          iconName="codepen-dark"
          link={`https://codepen.io/${codepenLink}`}
        />
        <SocialLink
          linkValue={stackoverflowLink}
          iconName="stackoverflow"
          link={`https://www.stackoverflow.com/users/${stackoverflowLink}`}
        />
        <SocialLink
          linkValue={rssLink}
          iconName="rss"
          link={`https://${rssLink}`}
        />
      </div>
    </div>
  );
}
