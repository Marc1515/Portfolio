import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import learrnAppImg from "./../../assets/img/learrnApp.png";
import trailersAppImg from "./../../assets/img/trailersApp.png";
import weatherAppImg from "./../../assets/img/weatherApp.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="Portfolio-container">
      <h1>
        <span className="first-word-title">PORTFOLIO</span>
      </h1>
      <div className="cards-container">
        <div className="card">
          <a href="https://learn.marcespana.com/" target="_blank">
            <img src={learrnAppImg} alt="" />
          </a>
          <div className="container-buttons">
            <button>
              {" "}
              <a
                href="https://github.com/Marc1515/learn-english"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </button>
            <button>
              <a href="https://learn.marcespana.com/" target="_blank">
                <AiOutlineLink />
              </a>
            </button>
          </div>
          <h4>Learn English App</h4>
        </div>
        <div className="card">
          <a href="https://trailer.marcespana.com/" target="_blank">
            <img src={trailersAppImg} alt="" />
          </a>
          <div className="container-buttons">
            <button>
              <a
                href="https://github.com/Marc1515/movieapp-youtube"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </button>
            <button>
              <a href="https://trailer.marcespana.com/" target="_blank">
                <AiOutlineLink />
              </a>
            </button>
          </div>
          <h4>Trailers App</h4>
        </div>
        <div className="card">
          <a href="https://weather.marcespana.com/" target="_blank">
            <img src={weatherAppImg} alt="" />
          </a>
          <div className="container-buttons">
            <button>
              {" "}
              <a href="https://github.com/Marc1515/openweather" target="_blank">
                <AiFillGithub />
              </a>
            </button>
            <button>
              <a href="https://weather.marcespana.com/" target="_blank">
                <AiOutlineLink />
              </a>
            </button>
          </div>
          <h4>Weather App</h4>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
