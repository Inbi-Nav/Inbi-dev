    import { useState, useEffect } from "react";
    import "./Navbar.css";
    import darkModeLogo from "../../assets/logo_light_mode.png";
    import lightModeLogo from "../../assets/logo_dark_mode.png";
    import darkModeSign from "../../assets/light_mode_sign.png";
    import lightModeSign from "../../assets/dark_mode_sign.png";

    type Language = 'en' | 'es';

        const translations = {
            es: {
                home: "INICIO",
                about:"SOBRE MI",
                skills:"SKILLS",
                projects:"PROYECTOS",
                contact:"CONTACTO"
            },
            en: {
                home: "HOME",
                about: "ABOUT ME",
                skills: "SKILLS",
                projects: "PROJECTS",
                contact: "CONTACT"
            },
        }

    function Navbar() {

        const [isDarkMode, setIsDarkMode] = useState(false);
        const toggleDarkMode = () => {
            setIsDarkMode((previousMode) => !previousMode);
        };

        useEffect(() => {
            if (isDarkMode) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
        }, [isDarkMode]);
        
        const [language, setLanguage] = useState<Language>("es");

        const toggleLanguage = () => {
            setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
        };

        const text = translations[language];
        return (
            <nav className="navbar">

            <div className="navbar-logo">
                    <img src={isDarkMode ? darkModeLogo : lightModeLogo} alt="Logo" />
                </div>

                <div className="navbar-links">
                    <a href="#home">{text.home}</a>
                    <a href="#about">{text.about}</a>
                    <a href="#skills">{text.skills}</a>
                    <a href="#projects">{text.projects}</a>
                    <a href="#contact">{text.contact}</a>
                </div>

                <div className="navbar-actions">
                    <div className= "darkMode-toggle">
                        <button onClick={toggleDarkMode}>
                            <img src={isDarkMode ? darkModeSign : lightModeSign} alt={isDarkMode ? "Light Mode" : "Dark Mode"}/>
                        </button>
                        </div> 

                    <div className="language-toggle">
                        <button
                            className={`language-switch ${language}`}
                            onClick={toggleLanguage}
                            aria-label={language === "es"? "Change language to English" : "Cambiar idioma a español"
                            }>
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
                </div>
            </nav>
        );

    }
    export default Navbar
