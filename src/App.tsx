import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { IconType } from "react-icons";

import "./App.css";

interface ButtonWithIcon {
  icon: React.ReactElement<IconType>;
  content: string;
  url: string;
}

const ButtonWithIcon = ({ icon, content, url }: ButtonWithIcon) => {
  const redirect = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      onClick={redirect}
    >
      <span>{icon}</span>
      <span>{content}</span>
    </button>
  );
};

interface Participant {
  name: string;
  bio: string;
  github: string;
}

const ParticipantCard = ({ name, bio, github }: Participant) => {
  return (
    <div className="participant-card">
      <div className="participant-card__header">
        <img
          src={`https://github.com/${github}.png`}
          alt="avatar"
          className="participant-card__avatar"
        />
      </div>
      <div className="participant-card__body">
        <h3 className="participant-card__name">{name}</h3>
        <p className="participant-card__bio">{bio}</p>
      </div>
      <div className="participant-card__divider" />
      <div className="participant-card__footer">
        <ButtonWithIcon
          icon={<AiFillGithub />}
          content="Meu perfil"
          url={`https://github.com/${github}`}
        />
      </div>
    </div>
  );
};

function App() {
  // Array de participantes
  const participants: Array<Participant> = [
    {
      name: "Daniel Boll",
      bio: "Estudante do quarto ano bla bla bla",
      github: "daniel-boll",
    },
    {
      name: "Pablo Hugen",
      bio: "Estudante do quarto ano bla bla bla",
      github: "tomcat-42",
    },
  ];

  return (
    <div className="App">
      <h1>PET - curso Git & Github</h1>
      <div>
        <h2>Participantes</h2>

        <div className="participant-card__wrapper">
          {participants.map((participant) => (
            <ParticipantCard {...participant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
