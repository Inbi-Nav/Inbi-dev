import { translations, type Language } from "../../Translations";
import { FaExternalLinkAlt } from "react-icons/fa";
import { techIcons, defaultTechIcon } from "./techIcon";
import "./Project.css";
import { useState } from "react";
import { projectImages } from "./projectImages"

type ProjectProps = {
    language: Language;
}

function Project({language}: ProjectProps) {
    const text = translations[language].projects;

    const [currentProject, setCurrentProject] = useState(0);

    const project = text.projects[currentProject];
    const nextProject = () => {
      setCurrentProject((prev) => prev === text.projects.length - 1 ? 0 : prev + 1
      );
    };
    return (
        <section className="project" id="project">
            {/* HEADER  */}
            <h2 className="project-box">&gt;<span className="project-text">{text.text}</span></h2>
            <div className="project-header">
                <h3 className="project-title"> {text.title}</h3>
                <p className="project-label"> {text.label} </p>
            </div>
            {/* project view  */}

            <div className="project-slider">
                <div className="project-container">                      
                    {/* Propject left side view */}
                    <div className="project-preview">
                        <div className="project-img-wrapper">
                            <img className="project-img" src={projectImages[project.id]} alt={`${project.name} preview`}/></div>  
                            <div className="project-name-container">
                                <div className="project-name-text">
                                    <h4 className="project-name">{project.name}</h4>
                                    {project.label && (
                                    <p className="proj-name-label">{project.label}</p>
                                    )}
                                </div>
                                    {project.github && (  
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="external-link"       aria-label={`Ver ${project.name} en GitHub`}>       <FaExternalLinkAlt aria-hidden="true" /></a> 
                                    )}
                            </div>
                        </div>
                        {/* Propject right side view */}
                        <div className="proj-info">
                        <span>
                            <h3> {project.descriptionLabel}</h3>
                            <p>{project.description}</p>
                        </span>

                        <div className="proj-tags">
                            {project.tags.map((tag) => {
                                const Icon = techIcons[tag]?? defaultTechIcon;
                                return (
                                    <span className="project-tag" key={tag}>
                                        <Icon className="project-tag-Icon" aria-hidden="true"/>
                                        <span>{tag}</span>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div> 
                {/* NEXT button  */}
                    <button className="proj-next" onClick={nextProject} aria-label="Next project">
                    &gt;</button>
            </div>
        </section>
        
    );
}
export default Project;