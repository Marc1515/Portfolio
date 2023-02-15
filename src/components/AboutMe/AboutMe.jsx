import { useEffect } from "react";
import "./AboutMe.css";
import CV from "./../../assets/MEQ.pdf";
import Typed from "typed.js";

const AboutMe = () => {
  useEffect(() => {
    const options = {
      strings: ["BIENVENIDO A MI PORTFOLIO COMO DESARROLLADOR WEB"],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      showCursor: false, // Opción para ocultar el cursor
    };
    const typed = new Typed("#typed-heading", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="aboutMe" className="AboutMe-container">
      <h1>
        <span className="first-word-title">Marc </span>España
      </h1>
      <div className="auto-typed-container">
        <h4 id="typed-heading" className="element">
          BIENVENIDO A MI PORTFOLIO COMO DESARROLLADOR WEB
        </h4>
      </div>
      <span>
        Si quieres ponerte en contacto conmigo escribeme a meq.1515@gmail.com
      </span>
      <button>
        <a href={CV} download>
          Descarga mi CV
        </a>
      </button>
    </section>
  );
};

export default AboutMe;
