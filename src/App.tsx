import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
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
        </>
    );
}
export default App;