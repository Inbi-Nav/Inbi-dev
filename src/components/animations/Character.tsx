import img1 from "../../assets/Character1.png";
import img2 from "../../assets/Character2.png";
import "./character.css";

export const Character = () => {
  return (
    <div className="char-wrap">
      <img className="char-img img1" src={img1} alt="Character" />
      <img className="char-img img2" src={img2} alt="Character" />
    </div>
  );
};