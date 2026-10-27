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
            <div className="contect_header">
                <h2 className="conatct_title">{text.title.split("\n").map((line, index) => (
                    <span key={index}>{line}</span>))}</h2>
                <p className="contact_label"> {text.lable} </p>
            
            <div className="contact_container">
                {/* left side email card */}
                <article className="contact_email_card">
                    <MdEmail/>
                    <h3 className="email_title">{text.emailTitle}</h3>
                    <p className="email_label"> {text.emailLabel} </p>
                    <a className="email_buttton" href="mailto:inbi.nav.02@gmail.com"> SAY HELLO <span aria-hidden="true">›</span> </a>
                </article>
                {/* right side terminal */}
                <div className="contact_terminal">
                    <div className="contact_header">
                        <div className="terminal_dots">
                            <span className="dot-a"></span>
                            <span className="dot-b"></span>
                            <span className="dot-c"></span>
                        </div>
                    </div>
                    <div className="terminal_body">
                        {/* linkedin */}
                        <div className="terminal_line">
                            <span className="terminal_prompt">$</span>
                            <span className="terminal_command">open linkedin</span>
                        </div>
                        <div className="terminal_output">
                            <span className="terminal_arrow">›</span>

                            <a href="https://www.linkedin.com/in/inbisat-naveed/" target="blank" rel="noreferrer">linkedin.com/in/inbisat-naveed/</a>
                        </div>
                        {/* github */}
                        <div className="terminal_line">
                            <span className="terminal_prompt">$</span>
                            <span className="terminal_command">git profile</span>
                        </div>
                        <div className="terminal_output">
                            <span className="terminal_arrow">›</span>

                            <a href="https://github.com/Inbi-Nav" target="blank" rel="noreferrer">github.com/Inbi-Nav</a>
                        </div>
                        {/* email */}
                        <div className="terminal_line">
                            <span className="terminal_prompt">$</span>
                            <span className="terminal_command">send email</span>
                        </div>
                        <div className="terminal_output">
                            <span className="terminal_arrow">›</span>

                            <a href="mailto:inbi.nav.02@gmail.com" target="blank" rel="noreferrer">inbi.nav.02@gmail.com</a>
                        </div>

                    </div>

                </div>
                

            </div>

            </div>
        </section>
    )
}

export default Contact;