import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Experience.css";

type Language = "en" | "es";

type ExperienceProps = {
    language: Language;
    toggleLanguage: () => void;

}

const translations = {
    es: {
        text: "EXPERIENCIA",
        label: "MI EXPERIENCIA",
        experiences: [
            {
                date: "Abr 2026 - Jun 2026",
                role: "Desarrolladora Full-Stack en PHP",
                place: "IT Academy, Barcelona",
                description: "Colaboré con los equipos de backend y frontend en el desarrollo y mantenimiento de una web existente, utilizando mockups de Figma como referencia de diseño. Trabajo con Scrum mediante sprints, participando en la planificación de tareas, reuniones diarias, revisiones de sprint y corrección de errores.",
                tags: ["PHP", "JavaScript", "TypeScript", "Scrum", "React.js", "Testing"],
            },
            {
                date: "Feb 2025 - Jun 2025",
                role: "Desarrolladora Frontend en prácticas",
                place: "Myllox, Barcelona",
                description: "Desarrollé interfaces web responsives a partir de mockups proporcionados, utilizando HTML, CSS, JavaScript y Bootstrap. Trabajé en un entorno ágil siguiendo la metodología Kanban para organizar las tareas y realizar un seguimiento del progreso.",
                tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Kanban", "Frontend"],
            },
            {
                date: "Feb 2025 - May 2025",
                role: "Desarrolladora Full Stack",
                place: "Proyecto académico",
                description: "Desarrollé una plataforma educativa full stack con React y Node.js, integrando funcionalidades de asistencia a la programación mediante IA y generación automática de cuestionarios. Diseñé APIs REST e implementé procesos CI/CD con GitHub Actions, utilizando Docker para contenerizar los servicios de la aplicación.",
                tags: ["React", "Node.js", "JavaScript", "MySQL", "MongoDB", "Docker", "CI/CD"],
            },
        ],
    },

    en: {
        text: "EXPERIENCE",
        label: "MY EXPERIENCE",
        experiences: [
            {
                date: "Apr 2026 - Jun 2026",
                role: "Full-Stack PHP Developer",
                place: "IT Academy, Barcelona",
                description: "Collaborated with backend and frontend teams to develop and maintain an existing website, using Figma mockups as design references. I work with Scrum in sprints, participating in task planning, daily stand-ups, sprint reviews, and bug fixing.",
                tags: ["PHP", "JavaScript", "TypeScript", "Scrum", "React.js", "Testing"],
            },
            {
                date: "Feb 2025 - Jun 2025",
                role: "Frontend Developer Intern",
                place: "Myllox, Barcelona",
                description: "Developed responsive web interfaces based on provided mockup using HTML, CSS, JavaScript, and Bootstrap. Worked in an Agile environment using the Kanban methodology to organize tasks and track progress.",
                tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Kanban", "Frontend"],
            },
            {
                date: "Feb 2025 - May 2025",
                role: "Full Stack Developer",
                place: "Academic project",
                description: "Developed a full-stack educational platform using React and Node.js, integrating AI-powered programming assistance and automated quiz generation. Designed REST APIs and implemented CI/CD pipelines with GitHub Actions, using Docker to containerize application services.",
                tags: ["React", "Node.js", "JavaScript", "MySQL", "MongoDB", "Docker", "CI/CD"],
            },
        ],
    },
};

function Experience({language}: ExperienceProps) {
    const text = translations[language];

    return (
        <section className="experience" id="experience">
            <h2 className="exp-box">&gt;<span className="exp-text">{text.text}</span></h2>
            <div className="exp-section">
                <h3 className="exp-header"> {text.label} </h3>
                <div className="cards-container">
                    <ul>
                        {text.experiences.map((experience, index) => (
                        <li className={`exp-event exp-event-${index}`} key={experience.date}>
                            <div className='exp-date'>
                                <i className="fa-regular fa-calendar"></i>
                                <span>{experience.date}</span>
                            </div>

                            <div className='exp-content'>
                                <h3>{experience.role}</h3>
                                <b>{experience.place}</b>
                                <p>{experience.description}</p>
                                <div className="exp-tags">
                                {experience.tags.map((tag, index) => ( <span className={`exp-tag exp-tag-${index}`}  key={tag} >{tag}</span>
        )                          )}
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Experience;