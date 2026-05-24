import img1 from "../../assets/CharacterIdle1.png";
import img2 from "../../assets/CharacterIdle2.png";
import "./CharacterIdle.css";

export const CharacterIdle = () => {
    return (
        <div className="char-wrap">
            <img className="char-wrap-img img1" src={img1} alt="Character Idle" />
            <img className="char-wrap-img img2" src={img2} alt="Character Idle" />
        </div>
    )
};