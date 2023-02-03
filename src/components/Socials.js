import React, { useContext } from "react";
import "./Socials.css";
import UILinkInput from "./UILinkInput";
import { ProfileContext } from "../App";

export default function Socials() {
  const {
    githubLink,
    setGithubLink,
    twitterLink,
    setTwitterLink,
    hashnodeLink,
    setHashnodeLink,
    mediumLink,
    setMediumLink,
    devtoLink,
    setDevtoLink,
    linkedinLink,
    setLinkedinLink,
    polyworkLink,
    setPolyworkLink,
    twitchLink,
    setTwitchLink,
    youtubeLink,
    setYoutubeLink,
    discordLink,
    setDiscordLink,
    instagramLink,
    setInstagramLink,
    facebookLink,
    setFacebookLink,
    dribbleLink,
    setDribbleLink,
    behanceLink,
    setBehanceLink,
    codesandboxLink,
    setCodesandboxLink,
    codepenLink,
    setCodepenLink,
    stackoverflowLink,
    setStackoverflowLink,
    rssLink,
    setRssLink,
  } = useContext(ProfileContext);
  return (
    <div className="socials-container">
      <UILinkInput
        linkLabel="GITHUB"
        icon="github-dark"
        startLink="https://github.com"
        linkValue={githubLink}
        linkAction={setGithubLink}
      />
      <UILinkInput
        linkLabel="TWITTER"
        icon="twitter"
        startLink="https://github.com"
        linkValue={twitterLink}
        linkAction={setTwitterLink}
      />
      <UILinkInput
        linkLabel="HASHNODE "
        icon="hashnode"
        startLink="https://github.com"
        linkValue={hashnodeLink}
        linkAction={setHashnodeLink}
      />
      <UILinkInput
        linkLabel="MEDIUM "
        icon="medium-dark"
        startLink="https://github.com"
        linkValue={mediumLink}
        linkAction={setMediumLink}
      />
      <UILinkInput
        linkLabel="DEV.TO "
        icon="devdotto-dark"
        startLink="https://github.com"
        linkValue={devtoLink}
        linkAction={setDevtoLink}
      />
      <UILinkInput
        linkLabel="LINKEDIN "
        icon="linkedin"
        startLink="https://github.com"
        linkValue={linkedinLink}
        linkAction={setLinkedinLink}
      />
      <UILinkInput
        linkLabel="POLYWORK "
        icon="polywork"
        startLink="https://github.com"
        linkValue={polyworkLink}
        linkAction={setPolyworkLink}
      />
      <UILinkInput
        linkLabel="TWITCH "
        icon="twitch"
        startLink="https://github.com"
        linkValue={twitchLink}
        linkAction={setTwitchLink}
      />
      <UILinkInput
        linkLabel="YOUTUBE "
        icon="youtube"
        startLink="https://github.com"
        linkValue={youtubeLink}
        linkAction={setYoutubeLink}
      />
      <UILinkInput
        linkLabel="DISCORD "
        icon="discord"
        startLink="https://github.com"
        linkValue={discordLink}
        linkAction={setDiscordLink}
      />
      <UILinkInput
        linkLabel="INSTAGRAM "
        icon="instagram"
        startLink="https://github.com"
        linkValue={instagramLink}
        linkAction={setInstagramLink}
      />
      <UILinkInput
        linkLabel="FACEBOOK "
        icon="facebook"
        startLink="https://github.com"
        linkValue={facebookLink}
        linkAction={setFacebookLink}
      />
      <UILinkInput
        linkLabel="DRIBBBLE "
        icon="dribbble"
        startLink="https://github.com"
        linkValue={dribbleLink}
        linkAction={setDribbleLink}
      />
      <UILinkInput
        linkLabel="BEHANCE "
        icon="behance"
        startLink="https://github.com"
        linkValue={behanceLink}
        linkAction={setBehanceLink}
      />
      <UILinkInput
        linkLabel="CODESANDBOX "
        icon="codesandbox-dark"
        startLink="https://github.com"
        linkValue={codesandboxLink}
        linkAction={setCodesandboxLink}
      />
      <UILinkInput
        linkLabel="CODEPEN "
        icon="codepen-dark"
        startLink="https://github.com"
        linkValue={codepenLink}
        linkAction={setCodepenLink}
      />
      <UILinkInput
        linkLabel="STACKOVERFLOW "
        icon="stackoverflow"
        startLink="https://github.com"
        linkValue={stackoverflowLink}
        linkAction={setStackoverflowLink}
      />
      <UILinkInput
        linkLabel="RSS "
        icon="rss"
        startLink="https://github.com"
        linkValue={rssLink}
        linkAction={setRssLink}
      />
    </div>
  );
}
