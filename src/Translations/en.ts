const en = {
    home: {
        greet: "WELCOME, USER",
        intro: "Hi, I'm",
        fullName: "INBISAT NAVEED",
        profession: "Role: Full-Stack Developer",
        description:
            "Full-Stack Developer focused on building scalable web applications with clean, maintainable code and modern technologies. I build intuitive, user-focused solutions with a focus on performance and usability.",
        phrases: [
            "love building web applications.",
            "enjoy learning new technologies.",
            "like turning ideas into functional applications.",
            "turn problems into solutions.",
        ],
    },
    
    about: {
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
            { name: "Catalan", level: "INTERMEDIATE", score: 3 },
        ],
    },
    skills: {
        skill: "SKILLS",
        label: "MY TECH\nSTACK",
        languages: "LANGUAGES",
        database: "DATABASES",
        tools: "TOOLS",
        description: "Tools that shape my ideas"
    },
    experience: {
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
    projects: {
        text: "PROJECTS",
        title: "MY PROJECTS",
        label: "A selection of projects where I combine creativity, logic, and user experience.",
        projects: [
            {
                id: "midori",
                name:"Midori",
                descriptionLabel: "PROJECT DESCRIPTION", 
                label: "E-commerce platform",
                github: "https://github.com/Inbi-Nav/Midori-Front",
                description: "Midori is an E-commerce platform that features user authentication, product catalog browsing, simulated payments, and order tracking. It incorporates role-based access control and an admin panel for order management, following the MVC architecture and relational database design principles.",
                tags: ["PHP", "Laravel", "MySQL", "Blade", "Tailwind CSS", "Livewire", "Docker", "Git"]
            },
            {
                id: "mindcode",
                name: "MINDCODE",
                label: "Academic Group Project",
                github: "https://github.com/inspedralbes/prj-final-front-back-G5-mindcode",
                descriptionLabel: "PROJECT DESCRIPTION", 
                description: "Mindcode is a full-stack educational platform that provides AI-powered programming assistance to students through contextualized responses and automated quizzes based on their previous interactions. Implemented RESTful APIs, user and class management, and role-based access control. Used Docker for containerization and GitHub Actions to automate CI/CD and production deployments.",
                tags: ["React", "JavaScript", "Node.js", "MySQL", "MongoDB", "Docker", "Git"]
            },
            {
                id: "etl",
                name: "ETL project",
                github: "https://github.com/Inbi-Nav/ETL-Project",
                descriptionLabel: "PROJECT DESCRIPTION", 
                description: "Developed an automated ETL pipeline to generate synthetic employee data, upload CSV files to cloud storage, and orchestrate daily data extraction, transformation, and loading workflows.",
                tags: ["Python", "Faker", "Google Composer Platform", "Cloud Storage", "Cloud Composer", "Airflow", "Cloud Data Fusion"]
            }
        ]
    }
};
export default en;