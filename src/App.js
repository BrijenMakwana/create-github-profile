import { useState, createContext } from "react";
import "./App.css";
import Preview from "./components/Preview";
import SectionHeader from "./components/SectionHeader";
import UIButton from "./components/UIButton";
import { sectionData, editingComponents } from "./data/data";

export const ProfileContext = createContext(null);

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
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
        <div className="preview-container">
          <Preview />
        </div>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;
