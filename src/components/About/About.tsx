import '@fortawesome/fontawesome-free/css/all.min.css';
type Language = "en" | "es";

type AboutProps = {
    language: Language;
    toggleLanguage: () => void;
}

const translations = {
    es: {
        knowMe: "CONÓCEME MEJOR",
        profile: "PERFIL",
        description: "Desarrolladora Full-Stack con experiencia en el diseño y desarrollo de aplicaciones web modernas, intuitivas y escalables. Me apasiona crear soluciones digitales enfocada en experiencia de usuaruio con una arquitectura sólida, eficiente y mantenible.\n Me apasiona el aprendizaje continuo y explorar nuevas tecnologías para ampliar y fortalecer mi stack tecnológico. Cuando se trata de resolver errores, es cuando mi espíritu de programadora realmente cobra vida. Disfruto enfrentándome a nuevos desafíos, depurando código, comprendiendo la causa raíz de los problemas y encontrando soluciones efectivas.", 
        education: "EDUCACIÓN",
        language: "IDIOMAS",
        spanish: "ESPAÑOL \n FLUiDO",
        english: "INGLÉS \n FLUIDO" ,
        catalan: "CATALÁN \n INTERMEDIO"
    },
    en: {
        knowMe: "KNOW ME BETTER",
        profile: "PROFILE",
        description: "Full-Stack Developer with experience designing and building modern, intuitive, and scalable web applications. I’m passionate about creating digital solutions focused on user experience with a solid, efficient, and maintainable architecture.\n I’m very keen about continuous learning and exploring new technologies to expand my tech stack. When it comes to solving bugs, that’s where my programmer spirit truly comes alive. I enjoy challenging myself to debug code, understand the root cause of problems, and find effective solutions.",
        education: "EDUCATION",
        language: "LANGUAGES",
        spanish: "SPANISH \n FLUENT",
        english: "ENGLISH \n FLUENT",
        catalan: "CATALAN \n INTERMIDIATE"
        
    }
};

function About({
    language,
    toggleLanguage
}: AboutProps)  
{

    const text = translations[language];
    return (
        <div className="about-me" id="about-me">
            <div className="know-me"> {text.knowMe}</div> 

            <div className="terminals">
            {/* Profile terminal*/}
                <div className="profile-terminal">
                    <div className="profile-header">
                        <span className="dot-a"></span>
                        <span className="dot-b"></span>
                        <span className="dot-c"></span>
                    </div>
                    <div className='profile-title'>
                        <i className="fa fa-user"></i>
                        <h3>{text.profile}</h3>
                    </div>
                    <p>{text.description}</p>
                </div>
            {/* Education terminal*/}
            <div className="education-terminal">
                    <div className="education-header">
                        <span className="dot-a"></span>
                        <span className="dot-b"></span>
                        <span className="dot-c"></span>
                    </div>
                    <div className='profile-title'>
                        <i className="fa fa-graduation-cap"></i>
                        <h3>{text.education}</h3>
                    </div>
                    <div className='education-timeline'>
                        <h4>2025-2023</h4>
                        <p>Desarrollo Aplicaciones Multiplataformas (DAM)</p>
                        <p>Institut Pedralbes \n Barcelona</p>
                        <h4>2021-2023</h4>
                        <p>SISTEMAS MICROINFORMÁTICOS Y REDES (SMIX)</p>
                        <p>Institut Pedralbes \n Barcelona</p>
                </div>
            {   /* Languages terminal*/}
                <div className='languages-terminal'>
                    <div className="languages-header">
                        <span className="dot-a"></span>
                        <span className="dot-b"></span>
                        <span className="dot-c"></span>
                    </div>
                    </div>
                        <div className='language-title'>
                        <i className='far fa-comment-dots'></i>
                        <h3>{text.language}</h3>
                    </div>
                    <table>
                        <tr>
                            <td>{text.spanish}</td>
                            <td>
                                <span className="square-a"></span>
                                <span className="square-b"></span>
                                <span className="square-c"></span>
                                <span className="square-d"></span>
                                <span className="square-e"></span>
                            </td>
                        </tr>
                        <tr>
                            <td> {text.english}</td>
                            <td>
                                <span className="square-a"></span>
                                <span className="square-b"></span>
                                <span className="square-c"></span>
                                <span className="square-d"></span>
                                <span className="square-e"></span>
                            </td>
                        </tr>
                        <tr>
                            <td> {text.catalan}</td>
                            <td>
                                <span className="square-a"></span>
                                <span className="square-b"></span>
                                <span className="square-c"></span>
                                <span className="square-d"></span>
                                <span className="square-e"></span>
                            </td>
                        </tr>
                    </table>
                </div>
                
            </div>

        </div>
    )

}

export default About;





