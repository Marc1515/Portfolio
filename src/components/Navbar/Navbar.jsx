import { useContext, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { appContext } from "../../context/appContext";

export const Navbar = () => {
  const { clicked, setClicked } = useContext(appContext);

  useEffect(() => {
    document.body.style.overflow = clicked ? "hidden" : "auto";
  }, [clicked]);

  const handleClick = (e) => {
    const widthScreen = window.screen.width;
    if (widthScreen <= 800) {
      setClicked(!clicked);
    }
  };

  return (
    <nav className={`navbar ${clicked ? "open" : ""}`}>
      <ul>
        <li>
          <Link
            onClick={handleClick}
            to="aboutMe"
            spy={true}
            smooth={true}
            duration={500}
          >
            Marc
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
          >
            Sobre Mi
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="technologies"
            spy={true}
            smooth={true}
            duration={500}
          >
            Tecnologías
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
