import "./Project.css";

type Language = "en" | "es";

type ProjectProps = {
    language: Language;
    toggleLanguage: () => void;
}

const translations = {
    es: {
        text: "PROYECTOS",
        title: "MY PROJECTS",
        label: "Una selección de proyectos donde combino creatividad, lógica y experiencia de usuario.",
        projects: [
            {
                P1_description: "Midori es una aplicación de comercio electrónico que incluye autenticación de usuarios, navegación por el catálogo de productos, funcionalidad de carrito de compras, pagos simulados y seguimiento de pedidos. Incorpora control de acceso basado en roles y un panel de administración para la gestión de pedidos, siguiendo la arquitectura MVC y los principios de diseño de bases de datos relacionales."
            },
            {
                P2_description: "Mindcode es una plataforma educativa full-stack que ofrece asistencia de programación mediante inteligencia artificial, proporcionando respuestas contextualizadas y cuestionarios automatizados basados en las interacciones previas de los estudiantes. Implementé API REST, gestión de usuarios y clases, y control de acceso basado en roles. Utilicé Docker para la contenerización y GitHub Actions para automatizar los procesos de CI/CD y los despliegues en producción."
            },
            {
                P3_description: "Desarrollé un proceso ETL automatizado para generar datos sintéticos de empleados, subir archivos CSV al almacenamiento en la nube y orquestar flujos diarios de extracción, transformación y carga de datos"
            }
        ]
    },

    en: {
        text: "PROJECTS",
        title: "MY PROJECTS",
        label: "A selection of projects where I combine creativity, logic, and user experience.",
        projects: [
            {
                P1_description: "Developed a full-stack e-commerce application featuring user authentication, product catalog browsing, a shopping cart, simulated payments, and order tracking. Implemented role-based access control and an admin panel for order management, following the MVC architecture and relational database design principles."
            },
            {
                P2_description: "Mindcode is a full-stack educational platform that provides AI-powered programming assistance to students through contextualized responses and automated quizzes based on their previous interactions. Implemented RESTful APIs, user and class management, and role-based access control. Used Docker for containerization and GitHub Actions to automate CI/CD and production deployments."
            },
            {
                P3_description: "Developed an automated ETL pipeline to generate synthetic employee data, upload CSV files to cloud storage, and orchestrate daily data extraction, transformation, and loading workflows."
            }
        ]
    }

}

function Project({language}: ProjectProps) {
    const text = translations[language];

    return (
        <section className="project" id="project">
            <h2 className="proj-box">&gt;<span className="proj-text">{text.text}</span></h2>
            <div className="proj-header">
                <h3 className="proj-title"> {text.title}</h3>
                <p className="proj-label"> {text.label} </p>
            </div>
            <div className="proj-container"> 

                <div className="proj-a">
                    <img src="" alt="Midori-Image" />
                    <h4 className="proj-name">Midori</h4>
                    <a href="">git link</a>
                    <p className="proj-description"> {text. projects[0].P1_description}</p>
                </div>
                <div className="proj-b">
                    <img src="" alt="Mindcode-Image" />
                    <h4 className="proj-name">Mindcode</h4>
                    <a href="">git link</a>
                    <p className="proj-description"> {text. projects[0].P2_description}</p>
                </div>
                <div className="proj-c">
                    <img src="" alt="ETL-Image" />
                    <h4 className="proj-name">ETL</h4>
                    <a href="">git link</a>
                    <p className="proj-description"> {text. projects[0].P3_description}</p>
                </div>
            </div>

        </section>
    )

}
export default Project;