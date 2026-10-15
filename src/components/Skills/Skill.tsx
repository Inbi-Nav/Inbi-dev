import "./Skill.css";
import Languages from "../../assets/Languages.png";
import frontend from "../../assets/FE.png";
import backend from "../../assets/BE.png";
import database from "../../assets/DB.png";
import tools from "../../assets/Tools.png";

type Language = "en" | "es";

type SkillProps = {
  language: Language;
  toggleLanguage: () => void;
};

const translations = {
  es: {
    skill: "HABILIDADES",
    label: "MI STACK\nTECNOLÓGICO",
    languages: "LENGUAJES",
    database: "BASES DE DATOS",
    tools: "HERRAMIENTAS",
    description: "Herramientas que dan forma a mis ideas",
  },

  en: {
    skill: "SKILLS",
    label: "MY TECH\nSTACK",
    languages: "LANGUAGES",
    database: "DATABASES",
    tools: "TOOLS",
    description: "Tools that shape my ideas",
  },
};

function Skill({ language }: SkillProps) {
  const text = translations[language];
  return (
    <section className="skills" id="skills">
        <span className="skills-tag">&gt; {text.skill}</span>
        <div className="skills-header">
            <h2 className="skill-label">{text.label.split("\n").map((line, index)=> (
              <span key={index}> {line}</span>
            ))}</h2>
            <p className="skill-description"> {text.description}</p>
        </div>
      <div className="skills-container">
        <div className="skill-group languages-container">
          <div className="skill-group-title">
            <img src={Languages} alt="Language image"/>
            <h3>{text.languages}</h3>
            <span className="language-line" />
          </div>
          <div className="skill-list">
            <b className="skill-item javascript">JavaScript</b>
            <b className="skill-item php">PHP</b>
            <b className="skill-item json">JSON</b>
            <b className="skill-item typescript">TypeScript</b>
          </div>
        </div>
        <div className="skill-group frontend-container">
          <div className="skill-group-title">
            <img src={frontend} alt="Frontend image" />
            <h3>FRONTEND</h3>
            <span className="frontend-line" />
          </div>
          <div className="skill-list">
            <b className="skill-item html">HTML</b>
            <b className="skill-item css">CSS</b>
            <b className="skill-item react">React.js</b>
            <b className="skill-item tailwind">Tailwind CSS</b>
          </div>
        </div>
        <div className="skill-group backend-container">
          <div className="skill-group-title">
            <img src= {backend} alt="Backend image" />
            <h3>BACKEND</h3>
            <span className="backend-line" />
          </div>
          <div className="skill-list">
            <b className="skill-item node">Node.js</b>
            <b className="skill-item express">Express.js</b>
            <b className="skill-item php-backend">PHP</b>
            <b className="skill-item laravel">Laravel</b>
          </div>
        </div>
        <div className="skill-group db-container">
          <div className="skill-group-title">
            <img src={database} alt="DataBase image" />
            <h3>{text.database}</h3>
            <span className="database-line" />
          </div>
          <div className="skill-list">
            <b className="skill-item mysql">MySQL</b>
            <b className="skill-item mongodb">Mongo DB</b>
          </div>
        </div>
        <div className="skill-group tools-container">
          <div className="skill-group-title">
            <img src={tools} alt="Tools image" />
            <h3>{text.tools}</h3>
            <span className="tools-line" />
          </div>
          <div className="skill-list">
            <b className="skill-item git">Git</b>
            <b className="skill-item github">GitHub</b>
            <b className="skill-item vscode">VS Code</b>
            <b className="skill-item postman">Postman</b>
            <b className="skill-item docker">Docker</b>
            <b className="skill-item gcp">GCP</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;