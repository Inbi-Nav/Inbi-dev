const es = {
    home: {
        greet: "BIENVENIDO/A, USER",
        intro: "Hola, soy",
        fullName: "INBISAT NAVEED",
        profession: "Rol: Desarrolladora Full-Stack",
        description:
            "Desarrolladora Full-Stack enfocada en crear aplicaciones web escalables, con código limpio y mantenible, utilizando tecnologías modernas. Desarrollo soluciones intuitivas centradas en el usuario con un enfoque en el rendimiento y la usabilidad.",
        phrases: [
            "me gusta desarrollar aplicaciones web.",
            "disfruto aprender nuevas tecnologías.",
            "me gusta convertir ideas en aplicaciones funcionales.",
            "convierto problemas en soluciones.",
        ],
    },

    about: {
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
    skills: {
        skill: "HABILIDADES",
        label: "MI STACK\nTECNOLÓGICO",
        languages: "LENGUAJES",
        database: "BASES DE DATOS",
        tools: "HERRAMIENTAS",
        description: "Herramientas que dan forma a mis ideas"
    },
    experience: {
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
    projects: {
        text: "PROYECTOS",
        title: "MIS PROYECTOS",
        label: "Una selección de proyectos donde combino creatividad, lógica y experiencia de usuario.",
        projects: [
            {
                id: "midori",
                name: "MIDORI",
                label: "E-commerce platform",
                github: "https://github.com/Inbi-Nav/Midori-Front",
                descriptionLabel: "DESCRIPCIÓN DEL PROYECTO", 
                description: "Midori es una plataforma E-commerce que incluye autenticación de usuarios, navegación por el catálogo de productos, pagos simulados y seguimiento de pedidos. Incorpora control de acceso basado en roles y un panel de administración para la gestión de pedidos, siguiendo la arquitectura MVC y los principios de diseño de bases de datos relacionales.",
                tags: ["PHP", "Laravel", "MySQL", "Blade", "Tailwind CSS", "Livewire", "Docker", "Git"]
            },
            {
                id: "mindcode",
                name: "MINDCODE",
                label: "Proyecto Académico grupal",
                github: "https://github.com/inspedralbes/prj-final-front-back-G5-mindcode",
                descriptionLabel: "DESCRIPCIÓN DEL PROYECTO", 
                description: "Mindcode es una plataforma educativa full-stack que ofrece asistencia de programación mediante inteligencia artificial, proporcionando respuestas contextualizadas y cuestionarios automatizados basados en las interacciones previas de los estudiantes. Implementé API REST, gestión de usuarios y clases, y control de acceso basado en roles. Utilicé Docker para la contenerización y GitHub Actions para automatizar los procesos de CI/CD y los despliegues en producción.",
                tags: ["React", "JavaScript", "Node.js", "MySQL", "MongoDB", "Docker", "Git"]

            },
            {
                id: "etl",
                name: "ETL project",
                github: "https://github.com/Inbi-Nav/ETL-Project",
                descriptionLabel: "DESCRIPCIÓN DEL PROYECTO", 
                description: "Desarrollé un proceso ETL automatizado para generar datos sintéticos de empleados, subir archivos CSV al almacenamiento en la nube y orquestar flujos diarios de extracción, transformación y carga de datos",
                tags: ["Python", "Faker", "Google Composer Platform", "Cloud Storage", "Cloud Composer", "Airflow", "Cloud Data Fusion"]
            }
        ]
    },
    contact: {
        title: "LET'S\nCONNECT",
        lable: "Actualmente estoy abierta a nuevas oportunidades profesionales. Si tienes una propuesta, un proyecto interesante o simplemente quieres conectar\n— No dudes en contactarme",
        emailTitle: "Envíame un correo",
        emailLabel: "Correo es la forma mas sencilla de contactar conmigo."
    },
}
export default es;