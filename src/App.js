import "./App.css";
import Introduction from "./components/Introduction";
import SectionHeader from "./components/SectionHeader";

function App() {
  return (
    <div className="App">
      <div className="editing-container">
        <SectionHeader />
        <div className="editing-component">
          <Introduction />
        </div>
      </div>
      <div className="preview-container"></div>
    </div>
  );
}

export default App;
