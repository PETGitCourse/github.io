import { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";

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
  bio?: string;
  github: string;
}

const ParticipantCard = ({ name, bio, github }: Participant) => {
  return (
    <div className="participant-card">
      <header className="participant-card__header">
        <img
          src={`https://github.com/${github}.png`}
          alt="avatar"
          className="participant-card__avatar"
        />
      </header>
      <div className="participant-card__body">
        <h3 className="participant-card__name">{name}</h3>
        <p className="participant-card__bio">{bio}</p>
      </div>
      <div className="participant-card__divider" />
      <footer className="participant-card__footer">
        <ButtonWithIcon
          icon={<AiFillGithub />}
          content="Meu perfil"
          url={`https://github.com/${github}`}
        />
      </footer>
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
    {
      name: "Vinicius Muller de Freitas",
      bio: "Estudante do quarto ano bla bla bla",
      github: "WoolliestTomb",
    },
    {
      name: "Halim Shams",
      github: "Halim-Shams",
    },
    {
      name: "Felipi Lima Matozinho",
      bio: "Estudante do quarto ano e desenvolvedor web",
      github: "Matozinho",
    },
  ];

  return (
    <div className="App">
      <h1>PET - curso Git & Github</h1>
      <main className="app__main">
        <h2>Participantes</h2>

        <div className="participant-card__wrapper">
          {participants.map((participant) => (
            <ParticipantCard {...participant} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
