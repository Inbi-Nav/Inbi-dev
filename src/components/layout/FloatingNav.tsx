import { useEffect, useState } from "react";
import "./FloatingNav.css";

const items = [
  { id: "home",     label: "Home"     },
  { id: "about",    label: "About"    },
  { id: "projects", label: "Projects" },
  { id: "stack",    label: "Stack"    },
  { id: "contact",  label: "Contact"  },
];

export const FloatingNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 3;
      let current = "home";

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= y) {
          current = item.id;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-wrap">
      <div className="nav-pill">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => goToSection(item.id)}
            className={`nav-btn ${active === item.id ? "is-active" : ""}`}
          >
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};