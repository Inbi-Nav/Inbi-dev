import { useState, useEffect } from "react";
import { type Language } from "./Translations";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";


function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState<Language>("es");
    const toggleDarkMode = () => {
        setIsDarkMode((previousMode) => !previousMode);
    };

    const toggleLanguage = () => {
        setLanguage((previousLanguage) =>
            previousLanguage === "es" ? "en" : "es"
        );
    };

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <>
            <Navbar
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                language={language}
                toggleLanguage={toggleLanguage}
            />
            <Home
                language= {language}
            />
            <About
                language={language}
                toggleLanguage={toggleLanguage}
            />
            <Skill
                language={language}
                toggleLanguage={toggleLanguage}
            />
            <Experience
                language={language}
                toggleLanguage={toggleLanguage}
            />
             <Project
                language={language}
                toggleLanguage={toggleLanguage}
            />
        </>
    );
}
export default App;