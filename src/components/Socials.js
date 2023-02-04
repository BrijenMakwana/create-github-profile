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
        startLink="https://twitter.com"
        linkValue={twitterLink}
        linkAction={setTwitterLink}
      />
      <UILinkInput
        linkLabel="HASHNODE "
        icon="hashnode"
        startLink="https:/"
        linkValue={hashnodeLink}
        linkAction={setHashnodeLink}
      />
      <UILinkInput
        linkLabel="MEDIUM "
        icon="medium-dark"
        startLink="http://medium.com"
        linkValue={mediumLink}
        linkAction={setMediumLink}
      />
      <UILinkInput
        linkLabel="DEV.TO "
        icon="devdotto-dark"
        startLink="https://dev.to.com"
        linkValue={devtoLink}
        linkAction={setDevtoLink}
      />
      <UILinkInput
        linkLabel="LINKEDIN "
        icon="linkedin"
        startLink="https://www.linkedin.com/in"
        linkValue={linkedinLink}
        linkAction={setLinkedinLink}
      />
      <UILinkInput
        linkLabel="POLYWORK "
        icon="polywork"
        startLink="https://polywork.com"
        linkValue={polyworkLink}
        linkAction={setPolyworkLink}
      />
      <UILinkInput
        linkLabel="TWITCH "
        icon="twitch"
        startLink="https://twitch.tv"
        linkValue={twitchLink}
        linkAction={setTwitchLink}
      />
      <UILinkInput
        linkLabel="YOUTUBE "
        icon="youtube"
        startLink="https://youtube.com/c"
        linkValue={youtubeLink}
        linkAction={setYoutubeLink}
      />
      <UILinkInput
        linkLabel="DISCORD "
        icon="discord"
        startLink="https://discord.com/users"
        linkValue={discordLink}
        linkAction={setDiscordLink}
      />
      <UILinkInput
        linkLabel="INSTAGRAM "
        icon="instagram"
        startLink="https://instagram.com"
        linkValue={instagramLink}
        linkAction={setInstagramLink}
      />
      <UILinkInput
        linkLabel="FACEBOOK "
        icon="facebook"
        startLink="https://facebook.com"
        linkValue={facebookLink}
        linkAction={setFacebookLink}
      />
      <UILinkInput
        linkLabel="DRIBBBLE "
        icon="dribbble"
        startLink="https://dribbble.com"
        linkValue={dribbleLink}
        linkAction={setDribbleLink}
      />
      <UILinkInput
        linkLabel="BEHANCE "
        icon="behance"
        startLink="https://behance.com"
        linkValue={behanceLink}
        linkAction={setBehanceLink}
      />
      <UILinkInput
        linkLabel="CODESANDBOX "
        icon="codesandbox-dark"
        startLink="https://codesandbox.io/u"
        linkValue={codesandboxLink}
        linkAction={setCodesandboxLink}
      />
      <UILinkInput
        linkLabel="CODEPEN "
        icon="codepen-dark"
        startLink="https://codepen.io"
        linkValue={codepenLink}
        linkAction={setCodepenLink}
      />
      <UILinkInput
        linkLabel="STACKOVERFLOW "
        icon="stackoverflow"
        startLink="https://www.stackoverflow.com/users"
        linkValue={stackoverflowLink}
        linkAction={setStackoverflowLink}
      />
      <UILinkInput
        linkLabel="RSS "
        icon="rss"
        startLink="https:/"
        linkValue={rssLink}
        linkAction={setRssLink}
      />
    </div>
  );
}
