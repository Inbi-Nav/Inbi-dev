import { useState } from "react";
import "./Navbar.css";

import webLogo from "../../assets/web_logo.png";

import darkModeSign from "../../assets/light_mode_sign.png";
import lightModeSign from "../../assets/dark_mode_sign.png";

type Language = "en" | "es";

type NavbarProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    language: Language;
    toggleLanguage: () => void;
};

const translations = {
    es: {
        home: "INICIO",
        about: "SOBRE MI",
        skills: "SKILLS",
        projects: "PROYECTOS",
        contact: "CONTACTO"
    },

    en: {
        home: "HOME",
        about: "ABOUT ME",
        skills: "SKILLS",
        projects: "PROJECTS",
        contact: "CONTACT"
    },
};

function Navbar({
    isDarkMode,
    toggleDarkMode,
    language,
    toggleLanguage
}: NavbarProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((previousState) => !previousState);
    };
    const text = translations[language];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={webLogo} alt="Web Logo"/>
            </div>

            <div id="navbar-menu" className={`navbar-links ${isMenuOpen ? "open" : ""}`} >
                <a href="#home" onClick={() => setIsMenuOpen(false)} >
                    {text.home}
                </a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                    {text.about}
                </a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                    {text.skills}
                </a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                    {text.projects}
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    {text.contact}
                </a>
            </div>

            <div className="navbar-actions">

                <div className="darkMode-toggle">
                    <button onClick={toggleDarkMode} aria-label={ isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                        <img src={isDarkMode ? darkModeSign : lightModeSign } alt=""/>
                    </button>
                </div>

                <div className="language-toggle">
                    <button className={`language-switch ${language}`} onClick={toggleLanguage} aria-label={ language === "es" ? "Change language to English" : "Cambiar idioma a español"}>
                        <span className="language-option language-en">
                            EN
                        </span>
                        <span className="language-option language-es">
                            ES
                        </span>
                        <span className="language-circle">
                            {language === "es" ? "ES" : "EN"}
                        </span>
                    </button>
                </div>

                <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="navbar-menu" aria-label={ isMenuOpen ? "Close navigation menu": "Open navigation menu"} >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

        </nav>
    );
}

export default Navbar;