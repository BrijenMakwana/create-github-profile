import { useState } from "react";
import "./App.css";
import SectionHeader from "./components/SectionHeader";
import UIButton from "./components/UIButton";
import { sectionData, editingComponents } from "./data/data";

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);

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
    <div className="App">
      <div className="editing-container">
        <SectionHeader
          heading={sectionData[sectionIndex].heading}
          description={sectionData[sectionIndex].description}
        />
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
        </div>
      </div>
      <div className="preview-container"></div>
    </div>
  );
}

export default App;
