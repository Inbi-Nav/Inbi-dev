import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Home.css";
import { useState, useEffect } from 'react';
type Language = "en" | "es";

type HomeProps = {
    language: Language;
    toggleLanguage: () => void;
}
const translations = {
    es: {
        greet: "BIENVENIDO/A, USER",
        intro: "Hola, soy",
        fullName: "INBISAT NAVEED",
        profession: "Rol: Desarrolladora Full-Stack",
        description: "Desarrolladora Full-Stack enfocada en crear aplicaciones web escalables, con código limpio y mantenible, utilizando tecnologías modernas. Desarrollo soluciones intuitivas centradas en el usuario con un enfoque en el rendimiento y la usabilidad.",
        phrases: [
            "me gusta desarrollar aplicaciones web.",
            "disfruto aprender nuevas tecnologías.",
            "me gusta convertir ideas en aplicaciones funcionales.",
            "convierto problemas en soluciones."
        ]
    },
    en: {
        greet: "WELCOME,  USER",
        intro: "Hi, I'm",
        fullName: "INBISAT NAVEED",
        profession: "Role:  Full-Stack Developer",
        description: "Full-Stack Developer focused on building scalable web applications with clean, maintainable code and modern technologies. I build intuitive, user-focused solutions with an focus on performance and usability.",
        phrases: [
            "love building web applications.",
            "enjoy learning new technologies.",
            "like turning ideas into functional applications.",
            "turn problems into solutions."
        ]
    }
};
function Home({
    language,
}: HomeProps) 
{

    const text = translations[language];
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayPhrase, setDisplayPhrase] = useState("");
    const [isTypingBack, setIsTypingBack] = useState(false);
    useEffect(() => {
    const currentPhrase = text.phrases[phraseIndex];
        console.log("Typing state", {
            phraseIndex,
            currentPhrase: text.phrases[phraseIndex],
            displayPhrase,
            isTypingBack
        });

    let timeout: number;
    if (!isTypingBack && displayPhrase.length < currentPhrase.length) {
        timeout = window.setTimeout(() => {
            console.log("finishtyping, start deleting");
            setDisplayPhrase(
                currentPhrase.slice(0, displayPhrase.length + 1)
            );
        }, 70);
    }
    else if (!isTypingBack && displayPhrase === currentPhrase) {
        timeout = window.setTimeout(() => {
            console.log("start deleting");
            setIsTypingBack(true);
        }, 1200);
    }
    else if (isTypingBack && displayPhrase.length > 0) {
        timeout = window.setTimeout(() => {
            setDisplayPhrase(
                currentPhrase.slice(0, displayPhrase.length - 1)
            );
        }, 40);
    }
    else {
        timeout = window.setTimeout(() => {
            console.log("finished deleting, next phrase");

            setIsTypingBack(false);
            setPhraseIndex(
                (currentIndex) =>
                    (currentIndex + 1) % text.phrases.length
            );
        }, 500);
    }
    return () => window.clearTimeout(timeout);

}, [
    displayPhrase,
    isTypingBack,
    phraseIndex,
    text.phrases
]);

    return (
        <div className="home" id="home">
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span className="dot-a"></span>
                    <span className="dot-b"></span>
                    <span className="dot-c"></span>
                </div>
                <span className="terminal-title">inbi.exe</span>
            </div>

            <div className="home-body">
                <h2 className="text">&gt;   
                    <span className="welcome-text">{text.greet} <span className="wave">👋</span> </span>
                </h2>
                <h2 className="my-intro">
                    <span className="intro-greet"> {text.intro}</span> 
                    <span className="intro-name"> {text.fullName}</span>   
                </h2>

                <div className='role-card'>
                    <h4 className="role-title"> <span className="role-dot"></span>{text.profession}</h4>
                    <p className="role-phrases">&gt; {displayPhrase} </p>
                </div>
                <p className="description">{text.description} </p>
            
                <div className="resume">
                    <a href="/Inbi-resume.pdf"  download="Inbisat-Resume.pdf" target="_blank" rel="noopner noreferrer"> VIEW RESUME </a>
                </div>

                <div className="social-links">
                    <div className="mail-link">
                        <a href="mailto:inbi.nav.02@gmail.com" target="_blank">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>

                    <div className="linkedin-link">
                        <a href="https://www.linkedin.com/in/inbisat-naveed/"target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    
                    <div className="github-link">
                        <a href="https://github.com/Inbi-Nav"target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
        </div>
    </div> 
    )
}
export default Home;