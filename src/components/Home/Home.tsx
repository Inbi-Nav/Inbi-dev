import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Home.css";
type Language = "en" | "es";

type HomeProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    language: Language;
    toggleLanguage: () => void;
}

const translations = {
    es: {
        greet: "BIENVENIDO, USUARIO",
        intro: "Hola, soy",
        fullName: "INBISAT NAVEED",
        profession: "Rol: Desarrolladora Full-Stack",
        description: "Desarrolladora Full-Stack apasionada por crear aplicaciones web eficientes y escalables, con código limpio y tecnologías modernas."
    },
    en: {
        greet: "WELCOME, USER",
        intro: "Hi, I'm",
        fullName: "INBISAT NAVEED",
        profession: "Role: Full-Stack Developer",
        description: "I'm a Full-Stack Developer passionate about building scalable web applications with clean code and modern technologies."
    }
};

function Home({
    isDarkMode,
    toggleDarkMode,
    language,
    toggleLanguage
}: HomeProps) 
{

    const text = translations[language];
    return (
        <div className="home">
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span className="dot-a"></span>
                    <span className="dot-b"></span>
                    <span className="dot-c"></span>
                </div>
                <span className="terminal-title">inbi.dev</span>
            </div>

            <div className="home-body">
                <h1 className="text">&gt;  {text.greet}</h1>
                <h2 className="my-intro">
                    <span className="intro-greet"> {text.intro}</span> 
                    <span className="intro-name"> {text.fullName}</span>   
                </h2>

                <h4 className="my-profession">{text.profession}</h4>
                <p className="description">{text.description}</p>
            </div> 
            <div className="resume">
                <a href="/Inbi-resume.pdf" download="Inbisat-Resume.pdf" target="_blank" rel="noopner-noreferrer" className="resume-button"> VIEW RESUME </a>
            </div>

            <div className="social-links">
                <a href="mailto:inbi.nav.02@gmail.com" target="_blank">
                    <i className="fa fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/inbisat-naveed/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Inbi-Nav" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>


    )

}
export default Home;