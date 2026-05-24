import "./App.css";
import { FloatingNav } from "./components/layout/FloatingNav";
import { Hero } from "./components/Hero";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <FloatingNav />

      <section id="home" style={{ height: "100vh" }}>
        <Hero />
      </section>

      <section id="about" style={{ height: "100vh" }}>
        <h1>About</h1>
      </section>

      <section id="projects" style={{ height: "100vh" }}>
        <h1>Projects</h1>
      </section>

      <section id="stack" style={{ height: "100vh" }}>
        <h1>Stack</h1>
      </section>

      <section id="contact" style={{ height: "100vh" }}>
        <h1>Contact</h1>
      </section>
    </>
  );  
}

export default App;