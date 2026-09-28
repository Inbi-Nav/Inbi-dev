import { useState } from "react";

type Language = "en" | "es";

type AboutProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    language: Language;
    toggleLanguage: () => void;
}

const translations = {
    es: {
        fullName: "INBISAT NAVEED",
        title: "Desarrolladora Full-Stack",
        description: "Desarrollador Full-Stack apasionada por crear aplicaciones web eficientes y escalables, con código limpio y tecnologías modernas."
    },
    en: {
        fullName: "INBISAT NAVEED",
        title: "Full-Stack Developer",
        description: "Full-Stack Developer passionate about building high-performance and scalable web applications with clean code and modern technologies."
    }
};

function About({
    isDarkMode,
    toggleDarkMode,
    language,
    toggleLanguage
}: AboutProps)  
{

    const text = translations[language];
    return (
        <div className="aboutMe">
            

        </div>
    )

}





