import { useEffect } from "react";
import "./AboutMe.css";
import CV from "./../../assets/MEQ.pdf";
import Typed from "typed.js";
import fotoPerfil from "./../../assets/img/fotoPerfil.png"

const AboutMe = () => {
  useEffect(() => {
    const options = {
      strings: ["BIENVENIDO A MI PORTFOLIO COMO DESARROLLADOR WEB"],
      typeSpeed: 40,
      backSpeed: 10,
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
      <div className="container-img">
        {<img src={fotoPerfil} alt="" />}
      </div>
      <div className="title-container">
        <h1>
          <span className="first-word-title">Marc </span>España
        </h1>
        <div className="auto-typed-container">
          <h4 id="typed-heading" className="element"></h4>
        </div>
      </div>
      <div className="container-cv-button">
        <button>
          <a href={CV} download>
            Descarga mi CV
          </a>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
