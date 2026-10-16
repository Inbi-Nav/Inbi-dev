import '@fortawesome/fontawesome-free/css/all.min.css';
import  "./About.css"
import { translations, type Language } from "../../Translations";


type AboutProps = {
    language: Language;
}

function About({ language }: AboutProps) {
    const text = translations[language].about;
    return (
        <section className="about-me" id="about-me">
        <h2 className="about-box">&gt;<span className="about-text">{text.about}</span></h2>
            <div className='main-container'>
                <div className='Introduction'> 
                    <h2 className="know-me"> {text.knowMe.split("\n").map((line, index) => (
                        <span key={index}>{line}</span>))}</h2> 
                </div>
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
   </section> 
)}
export default About;