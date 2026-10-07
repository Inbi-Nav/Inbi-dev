import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
type Language = "en" | "es";
import  "./About.css"

type AboutProps = {
    language: Language;
    toggleLanguage: () => void;
}

const translations = {
    es: {
        about: "SOBRE MI & MI TRAYECTORIA",
        knowMe: "CONÓCEME\nMEJOR",
        profile: "PERFIL",
        description: "Desarrolladora Full-Stack con experiencia en el diseño y desarrollo de aplicaciones web modernas, intuitivas y escalables. Me apasiona crear soluciones digitales enfocada en experiencia de usuaruio con una arquitectura sólida, eficiente y mantenible.\n Me apasiona el aprendizaje continuo y explorar nuevas tecnologías para ampliar mi stack tecnológico. Dato curioso sobre mí: cuando se trata de resolver bugs, es ahí donde realmente sale mi espíritu de programador. Para algunos desarrolladores, hacer debugging es una pesadilla (¡sin duda, todavía lo es!), pero a mí me gusta el reto de investigar el código, entender qué salió mal y encontrar una solución eficiente.", 
        education: "EDUCACIÓN",
        timeline: [
            {
                date: "2021-2023",
                title: "Sistemas Microinformáticos y Redes (SMIX)",
                school: "Institut Puig Castellar, Barcelona",
                tags: ["Hardware", "Infraestructura IT", "Sistemas", "Networking"],
            },
            {
                date: "2023-2025",
                title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
                school: "Institut Pedralbes, Barcelona",
                tags: ["Desarrollo de software", "Desarrollo Full-Stack"],
            },
            {
                date: "2025-2026",
                title: "Full-Stack Developer PHP Bootcamp",
                school: "IT Academy, Barcelona",
                tags: ["PHP", "Laravel", "React", "SQL"],
            },
        ],
        language: "IDIOMAS",
        languages: [
            { name: "ESPAÑOL", level: "FLUIDO", score: 5 },
            { name: "INGLÉS", level: "FLUIDO/NATIVO", score: 5 },
            { name: "CATALÁN", level: "INTERMEDIO", score: 3 },
        ],
    },
    en: {
        about: "ABOUT ME & MY JOURNEY ",
        knowMe: "KNOW\nME BETTER",
        profile: "PROFILE",
        description: "Full-Stack Developer with experience designing and building modern, intuitive, and scalable web applications. I’m passionate about creating digital solutions focused on user experience with a solid, efficient, and maintainable architecture.\n I’m very keen about continuous learning and exploring new technologies to expand my tech stack. Fun fact about me: when it comes to solving bugs, that’s where my programmer spirit truly comes alive. For some devs, debugging is a nightmare (no doubt! it still is), but I enjoy the challenge of digging into the code, figuring out what went wrong, and coming up with an efficient solution",
        education: "EDUCATION",
        timeline: [
            {
                date: "2021-2023",
                title: "Microinformatics Systems and Network (SMIX)",
                school: "Institut Puig Castellar, Barcelona",
                tags: ["Hardware", "Infraestructura IT", "Systems", "Networking"],
            },
            {
                date: "2023-2025",
                title: "Multiplatform Application Development (DAM)",
                school: "Institut Pedralbes, Barcelona",
                tags: ["Software Development", "Full-Stack Developemnt"],
            },
            {
                date: "2025-2026",
                title: "Bootcamp Full-Stack Developer PHP",
                school: "IT Academy, Barcelona",
                tags: ["PHP", "Laravel", "React", "SQL"],
            },
        ],
        language: "LANGUAGES",
        languages: [
            { name: "Spanish", level: "FLUENT", score: 5 },
            { name: "English", level: "FLUENT/NATIVE", score: 5 },
            { name: "Catalan", level: "INTERMIDIATE", score: 3 },
        ],
    }
};

function About({
    language,
}: AboutProps)  
{

    const text = translations[language];
    return (
        <div className="about-me" id="about-me">
        <h2 className="about-box">&gt;<span className="about-text">{text.about}</span></h2>
            {/* Main layout */}
            <div className='main-container'>
                {/* introduccion */}
                <div className='Introduction'> 
                    <h2 className="know-me"> {text.knowMe.split("\n").map((line, index) => (
                        <span key={index}>{line}</span>))}</h2> 
                </div>
                {/* Profile terminal*/}
                <div className="profile-terminal">
                    <div className="profile-header">
                        <div className='terminal-dots'>
                            <span className="dot-a"></span>
                            <span className="dot-b"></span>
                            <span className="dot-c"></span>
                        </div>
                    </div>
                    <div className='profile-title'>
                        <i className="fa fa-user"></i>
                        <h3>{text.profile}</h3>
                    </div>
                    <p className='description'>{text.description}</p>
                    <div className='stats-container'>
                        <div className='role-box'>
                            <i className='fa fa-code'></i>
                            <p className='role-text'>Full-Stack Developer</p>
                        </div>
                        <div className='experience-box'>
                            <span className="experience-number">1~</span>
                            <span className='experience-label'>YEAR EXPERIENCE </span>
                        </div>
                        <div className='coding-stat'>
                            <span className="coding-number">3+</span>
                            <span className='coding-label'>YEARS OF CODING </span>
                        </div>
                    </div>
                </div>
                {/* Education terminal*/}
            <div className="education-terminal">
                <div className="education-header">
                    <div className='terminal-dots'>
                        <span className="dot-a"></span>
                        <span className="dot-b"></span>
                        <span className="dot-c"></span>
                    </div>
                </div>
                <div className='education-title'>
                    <i className="fa fa-graduation-cap"></i>
                    <h3>{text.education}</h3>
                </div>
                <div className='education-timeline'>
                    <ul className='timeline-content'>
                        <li className='event' data-date="2021-2023">
                            <h3>{text.timeline[0].title}</h3>
                            <p>{text.timeline[0].school}</p>
                            <p> {text.timeline[0].tags.join(" · ")}</p>
                        </li>
                        <li className='event' data-date="2023-2025">
                            <h3>{text.timeline[1].title}</h3>
                            <p>{text.timeline[1].school}</p>
                            <p>{text.timeline[1].tags.join(" · ")}</p>
                        </li>
                        <li className='event' data-date="2025-2026">
                            <h3>{text.timeline[2].title}</h3>
                            <p>{text.timeline[2].title}</p>
                            <p>{text.timeline[2].tags.join(" · ")}</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Languages terminal*/}
            <div className='languages-terminal'>
                <div className="languages-header">
                    <div className='terminal-dots'>
                        <span className="dot-a"></span>
                        <span className="dot-b"></span>
                        <span className="dot-c"></span>
                    </div>
                </div>
                <div className='language-title'>
                    <i className='fa fa-language'></i>
                    <h3>{text.language}</h3>
                </div>
                <ul className="language-list">
                    {text.languages.map((lang) => (
                        <li className="language-item" key={lang.name}>
                            <div className="language-info">
                                <span className="language-name">{lang.name}</span>
                                <span className="language-level">{lang.level}</span>
                                </div>
                                <div className="language-squares" role="img" aria-label={`${lang.score}/5`}> {[1, 2, 3, 4, 5].map((n) => (
                                <span key={n}className={`square ${n <= lang.score ? "filled" : ""}`}></span>))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
   </div> 
)}
export default About;