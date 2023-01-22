import "./App.css";
import UITextInput from "./components/UITextInput";

function App() {
  return (
    <div className="App">
      <UITextInput
        inputLabel="HI! MY NAME IS"
        emoji="👋🏻"
        inputPlaceholder="Brijen Makwana"
      />
      <UITextInput
        inputLabel="SUBTITLE"
        emoji="💡"
        inputPlaceholder="Mobile Developer"
      />
      <UITextInput
        inputLabel="LONG DESCRIPTION"
        emoji="✏️"
        inputPlaceholder="eg: I have learning coding for 5 years now. I'm a mobile and web developer works with React and react Native"
        isTextArea={true}
      />
      <UITextInput
        inputLabel="I'M BASED IN"
        emoji="🌍"
        inputPlaceholder="India"
      />
      <UITextInput
        inputLabel="SEE MY PORTFOLIO"
        emoji="🖥"
        inputPlaceholder="brijenmakwana.vercel.app"
        isLinkAvailable={true}
      />
      <UITextInput
        inputLabel="CONTACT ME AT"
        emoji="✉️"
        inputPlaceholder="brijenma@gmail.com"
      />
      <UITextInput
        inputLabel="I'M CURRENTLY WORKING ON"
        emoji="🚀"
        inputPlaceholder="MyApp"
        isLinkAvailable={true}
      />
      <UITextInput
        inputLabel="I'M CURRENTLY LEARNING"
        emoji="🧠"
        inputPlaceholder="Machine Learning"
      />
    </div>
  );
}

export default App;
