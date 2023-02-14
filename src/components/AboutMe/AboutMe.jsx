import "./AboutMe.css";
import CV from "./../../assets/MEQ.pdf";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="AboutMe-container">
      <h1>
        <span className="first-word-title">Marc </span>España
      </h1>
      <h4>BIENVENIDO A MI PORTFOLIO COMO DESARROLLADOR WEB</h4>
      <span>
        Si quiere ponerte en contacto conmigo escribeme a info@marcespana.com
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
