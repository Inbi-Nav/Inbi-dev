import { translations, type Language } from "../../Translations";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

type ContactProps = {
    language: Language;
}

function Contact({language}: ContactProps) {
    const text = translations[language].contact;

    return (
        <section className="contact" id="contact">
            {/* HEADER */}
            <div className="contact-header">
                <h2 className="contact-title">{text.title.split("\n").map((line, index) => (
                    <span key={index} className={index === 0 ? "title-first" : "title-second"} >{line}</span>))}</h2>
                <p className="contact-label">{text.lable .split("\n").map((line, index) => (
                    <span key={index}>{line}</span>))} </p>
            </div>
            
            <div className="contact-container">
                {/* left side email card */}
                <article className="contact-email-card">
                    <span className="email-icon"> <MdEmail/> </span>
                    <h3 className="email-title">{text.emailTitle}</h3>
                    <p className="email-label"> {text.emailLabel} </p>
                    <a className="email-buttton" href="mailto:inbi.nav.02@gmail.com"> SAY HELLO <span aria-hidden="true">›</span> </a>
                </article>
                {/* right side terminal */}
                <div className="contact-terminal">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="dot-a"></span>
                            <span className="dot-b"></span>
                            <span className="dot-c"></span>
                        </div>
                    </div>
                    <div className="terminal-body">
                        {/* linkedin */}
                        <div className="terminal-line">
                            <span className="terminal-prompt">$</span>
                            <span className="terminal-command">
                            <span className="cmd-open">open</span> linkedin</span>
                        </div>
                        <div className="terminal-output">
                            <span className="terminal-arrow">›</span>

                            <a href="https://www.linkedin.com/in/inbisat-naveed/" target="_blank" rel="noreferrer">linkedin.com/in/inbisat-naveed/</a>
                        </div>
                        {/* github */}
                        <div className="terminal-line">
                            <span className="terminal-prompt">$</span>
                            <span className="terminal-command"><span className="cmd-git">git</span> profile</span>
                        </div>
                        <div className="terminal-output">
                            <span className="terminal-arrow">›</span>

                            <a href="https://github.com/Inbi-Nav" target="blank" rel="noreferrer">github.com/Inbi-Nav</a>
                        </div>
                        {/* email */}
                        <div className="terminal-line">
                            <span className="terminal-prompt">$</span>
                            <span className="terminal-command"><span className="cmd-send">send</span> email</span>
                        </div>
                        <div className="terminal-output">
                            <span className="terminal-arrow">›</span>

                            <a href="mailto:inbi.nav.02@gmail.com" target="blank" rel="noreferrer">inbi.nav.02@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-line"></div>
                <p>COPYRIGHT © 2026 INBISAT NAVEED. ALL RIGHTS RESERVED.</p>
            </footer>
        </section>
    )
}

export default Contact;