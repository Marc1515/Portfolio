import { useContext } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import marc from "./../../assets/img/marc1.png";
import "./Navbar.css";
import { appContext } from "../../context/appContext";

export const Navbar = () => {
  const { clicked, setClicked } = useContext(appContext);

  return (
    <nav className={`navbar ${clicked ? "open" : ""}`}>
      <ul>
        <li>
          <img src={marc} alt="" />
        </li>
        <li>
          <Link
            onClick={() => {
              setClicked(!clicked);
            }}
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
            onClick={() => {
              setClicked(!clicked);
            }}
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
            onClick={() => {
              setClicked(!clicked);
            }}
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
            onClick={() => {
              setClicked(!clicked);
            }}
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
