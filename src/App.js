import { useState, createContext } from "react";
import "./App.css";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";
import SectionHeader from "./components/SectionHeader";
import UIButton from "./components/UIButton";
import { sectionData, editingComponents, skillsIconData } from "./data/data";
import { colorScheme } from "./color/color";
import { markdownRef } from "./components/Markdown";

export const ProfileContext = createContext(null);

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  // introduction states
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [email, setEmail] = useState("");
  const [workingName, setWorkingName] = useState("");
  const [workingLink, setWorkingLink] = useState("");
  const [learning, setLearning] = useState("");
  const [collaborate, setCollaborate] = useState("");
  const [anything, setAnything] = useState("");

  // skills states
  const [core, setCore] = useState(skillsIconData.core);
  const [frontend, setFrontend] = useState(skillsIconData.frontend);
  const [backend, setBackend] = useState(skillsIconData.backend);
  const [other, setOther] = useState(skillsIconData.other);
  const [software, setSoftware] = useState(skillsIconData.software);
  const [web3, setWeb3] = useState(skillsIconData.web3);

  // socials states
  const [githubLink, setGithubLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [hashnodeLink, setHashnodeLink] = useState("");
  const [mediumLink, setMediumLink] = useState("");
  const [devtoLink, setDevtoLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [polyworkLink, setPolyworkLink] = useState("");
  const [twitchLink, setTwitchLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [discordLink, setDiscordLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [dribbleLink, setDribbleLink] = useState("");
  const [behanceLink, setBehanceLink] = useState("");
  const [codesandboxLink, setCodesandboxLink] = useState("");
  const [codepenLink, setCodepenLink] = useState("");
  const [stackoverflowLink, setStackoverflowLink] = useState("");
  const [rssLink, setRssLink] = useState("");

  // support
  const [buyMeCoffeeLink, setBuyMeCoffeeLink] = useState("");

  // preview or markdown
  const [isMarkdown, setIsMarkdown] = useState(false);

  const nextSection = () => {
    if (sectionIndex < sectionData.length - 1) {
      setSectionIndex((prev) => prev + 1);
    }
  };

  const previousSection = () => {
    if (sectionIndex > 0) {
      setSectionIndex((prev) => prev - 1);
    }
  };

  // toggle between preview/markdown
  const togglePreview = () => {
    setIsMarkdown((prev) => !prev);
  };

  // copy markdown to clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(markdownRef?.current?.innerText)
      .then(() => alert("Copied to clipboard!!"))
      .catch((error) => alert(error));
  };

  return (
    <ProfileContext.Provider
      value={{
        name,
        setName,
        subtitle,
        setSubtitle,
        description,
        setDescription,
        location,
        setLocation,
        portfolioName,
        setPortfolioName,
        portfolioLink,
        setPortfolioLink,
        email,
        setEmail,
        workingName,
        setWorkingName,
        workingLink,
        setWorkingLink,
        learning,
        setLearning,
        collaborate,
        setCollaborate,
        anything,
        setAnything,
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
        buyMeCoffeeLink,
        setBuyMeCoffeeLink,
      }}
    >
      <div className="App">
        <div className="editing-container">
          <SectionHeader
            heading={sectionData[sectionIndex].heading}
            description={sectionData[sectionIndex].description}
          />
          {/* section toggle buttons */}
          <div className="section-toggle-btns">
            <UIButton
              text="previous section"
              btnAction={previousSection}
              shouldVisible={sectionIndex > 0}
            />
            <UIButton
              text="next section"
              btnAction={nextSection}
              shouldVisible={sectionIndex < sectionData.length - 1}
            />
          </div>
          <div className="editing-component">
            {editingComponents[sectionIndex]}
            {/* section toggle buttons */}
            <div className="section-toggle-btns">
              <UIButton
                text="previous section"
                btnAction={previousSection}
                shouldVisible={sectionIndex > 0}
              />
              <UIButton
                text="next section"
                btnAction={nextSection}
                shouldVisible={sectionIndex < sectionData.length - 1}
              />
            </div>
          </div>
        </div>
        <div
          className="preview-container"
          style={{ backgroundColor: colorScheme["dark"].secondary }}
        >
          <div className="preview-toggle-btn-container">
            <UIButton
              text={isMarkdown ? "switch to Preview" : "switch to Markdown"}
              btnAction={togglePreview}
              shouldVisible={true}
            />
            {isMarkdown && (
              <UIButton
                text="Copy"
                btnAction={copyToClipboard}
                shouldVisible={true}
              />
            )}
          </div>

          <div className="preview-component">
            {isMarkdown ? <Markdown /> : <Preview />}
          </div>
        </div>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;
