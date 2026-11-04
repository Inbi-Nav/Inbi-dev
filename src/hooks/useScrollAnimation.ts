import { useEffect } from "react";

const SELECTORS = [
    ".home",
    ".about-box", ".know-me", ".profile-terminal",
    ".education-terminal", ".languages-terminal",
    ".skills-tag", ".skills-header", ".skill-group",
    ".exp-box", ".exp-header", ".exp-event",
    ".project-box", ".project-header", ".project-slider",
    ".contact-header", ".contact-email-card",
    ".contact-terminal", ".contact-footer",
].join(",");

export function useScrollAnimation(repeat = true) {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(SELECTORS);

        elements.forEach((element, index) => {
            element.classList.add("reveal");
            element.style.setProperty(
                "--reveal-delay",
                `${(index % 4) * 100}ms`
            );
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting) {
                    target.classList.add("visible");
                } else if (repeat) {
                    target.classList.remove("visible");
                }            
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -6% 0px"
        });

        elements.forEach(element => observer.observe(element));

        return () => {
            observer.disconnect();

            elements.forEach(element => {
                element.classList.remove("reveal", "visible");
                element.style.removeProperty("--reveal-delay");
            });
        };
    }, [repeat]);
}