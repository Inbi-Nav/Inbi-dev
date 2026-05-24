import "./Hero.css";
import { Character } from "./animations/Character";

export const Hero = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <Character />
        <div className="hero-text">
          <span className="hero-name">INBISAT NAVEED</span>
          <span className="hero-role">Full Stack Developer</span>
        </div>

      </div>
    </section>
  );
};