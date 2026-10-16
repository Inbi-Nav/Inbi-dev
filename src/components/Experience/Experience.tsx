import '@fortawesome/fontawesome-free/css/all.min.css';
import { translations, type Language } from "../../Translations";
import "./Experience.css";

type ExperienceProps = {
    language: Language;
}

function Experience({language}: ExperienceProps) {
    const text = translations[language].experience;
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