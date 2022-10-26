import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { IconType } from "react-icons";

import "./App.css";

interface ButtonWithIcon {
  icon: React.ReactElement<IconType>;
  content: string;
}

const ButtonWithIcon = ({ icon, content }: ButtonWithIcon) => {
  return (
    <button style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span>{icon}</span>
      <span>{content}</span>
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <h1>PET - Git</h1>
      <div className="card">
        <ButtonWithIcon icon={<AiFillGithub />} content="Repositório" />
      </div>
      <p className="read-the-docs">Me altere</p>
    </div>
  );
}

export default App;
