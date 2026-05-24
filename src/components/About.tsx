import "./About.css";
import { CharacterIdle } from "./animations/CharacterIdle";

export const About = () => {
    return (
        <section className="about-section">
           <div className="about-content">
            <CharacterIdle />
           </div> 
        </section>
    )
};