import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Experience = () => {
  return (
    <section id="experience" className="Experience-container">

      <h1>
        <span className="first-word-title">SOBRE</span> MI
      </h1>
      <span>
        Empecé a despertar mi pasión por el desarrollo web hace unos 2 años. Con
        la llegada de la pandemia empecé a practicar con diferentes tecnologías.
        También he trabajado 1 año con una empresa local. Mi rol era crear una
        interfaz para una página de reservas de taquillas electrónicas.
      </span>
      <h4>
        ACTUALMENTE, ESTUDIO POR MI CUENTA Y BUSCO AMPLIAR MI CAMPO LABORAL EN
        EL MUNDO DEL DESARROLLO WEB.
      </h4>
      <span>
        Si quieres ponerte en contacto conmigo escríbeme a{" "}
        <strong>meq.1515@gmail.com</strong>
      </span>

      <div className="social-medias-container">
        <a href="https://github.com/Marc1515" target="_blank" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.instagram.com/marc_espp/" target="_blank" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/marc-espa%C3%B1a-833924141/" target="_blank" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
