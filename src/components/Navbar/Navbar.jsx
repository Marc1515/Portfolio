import { Link, animateScroll as scroll } from "react-scroll";
import marc from "./../../assets/img/marc1.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img src={marc} alt="" />
        </li>
        <li>
          <Link to="aboutMe" spy={true} smooth={true} duration={500}>
            Marc
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
