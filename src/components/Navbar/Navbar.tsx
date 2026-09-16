import { useState } from "react";
import "./Navbar.css";
type Language = 'en' | 'es';

    const translations = {
        es: {
            home: "Inicio",
            about:"Sobre Mi",
            skills:"Skills",
            projects:"Proyectos",
            contact:"Contacto"
        },
        en: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
    }

function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    // language change function
    const [language, setLanguage] = useState<Language>("es");
    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
    };

    const text = translations[language];

    return (
        <nav className="navbar">
            {/* Logo */}
           <div className="navbar-logo">
                <h3>Logo</h3>
            </div>

            {/* Nav Links */}
            <div className="navbar-links">
                <a href="#about">{text.about}</a>
                <a href="#skills">{text.skills}</a>
                <a href="#projects">{text.projects}</a>
                <a href="#contact">{text.contact}</a>
            </div>

            {/* Actions */}
            <div className= "darkMode-toggle">
                <button onClick={toggleDarkMode}>
                    Dark Mode 
                </button>
            </div> 

            <div className="language-toggle">
                <button onClick={() => changeLanguage('en')}>
                    EN
                </button>
                <button onClick={() => changeLanguage('es')}>
                    ES
                </button>
            </div>
        </nav>
    );

}
export default Navbar
