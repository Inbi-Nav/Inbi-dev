import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Home.css";
import { translations, type Language } from "../../Translations";
import { useState, useEffect } from 'react';

type HomeProps = {
    language: Language;
}

function Home({ language }: HomeProps) {
    const text = translations[language].home;

    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayPhrase, setDisplayPhrase] = useState("");
    const [isTypingBack, setIsTypingBack] = useState(false);
    useEffect(() => {
    const currentPhrase = text.phrases[phraseIndex];

    let timeout: number;
    if (!isTypingBack && displayPhrase.length < currentPhrase.length) {
        timeout = window.setTimeout(() => {
            setDisplayPhrase(
                currentPhrase.slice(0, displayPhrase.length + 1)
            );
        }, 70);
    }
    else if (!isTypingBack && displayPhrase === currentPhrase) {
        timeout = window.setTimeout(() => {
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
        <section className="home" id="home">
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
                    <a href={`${import.meta.env.BASE_URL}Inbi-resume.pdf`} download="Inbisat-Resume.pdf" target="_blank" rel="noopener noreferrer"> VIEW RESUME </a>
                </div>

                <div className="social-links">
                    <div className="mail-link">
                        <a href="mailto:inbi.nav.02@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>

                    <div className="linkedin-link">
                        <a href="https://www.linkedin.com/in/inbisat-naveed/"target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    
                    <div className="github-link">
                        <a href="https://github.com/Inbi-Nav"target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
        </div>
    </section> 
    )
}
export default Home;