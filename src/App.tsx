import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
export type Language = "es" | "en";

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
                toggleLanguage={toggleLanguage}
            />
            <About
                language={language}
                toggleLanguage={toggleLanguage}
            />
        </>
    );
}
export default App;