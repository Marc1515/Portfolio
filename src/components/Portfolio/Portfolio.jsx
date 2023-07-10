import React, { useState } from "react";
import "./Portfolio.css";
import images from "./Portfolio";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 3;
  /* const images = PortfolioQuestions; */ // aquí irá la lista de imágenes

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const displayedImages = images.slice(startIndex, endIndex);

  return (
    <section id="portfolio" className="Portfolio-container">
      <h1>
        <span className="first-word-title">PORTFOLIO</span>
      </h1>
      <span>
        Aquí encontraras una variedad de Proyectoes hechos en React o en
        Wordpress.
      </span>
      <div className="cards-wrapper">
        <div className="cards-container">
          {displayedImages.map((item) => (
            <div key={item.id} className="card">
              <a href={item.pageURL} target="_blank">
                <img src={item.img} alt="" />
              </a>

              <div className="container-buttons">
                <button>
                  {" "}
                  <a href={item.githubURL} target="_blank">
                    <AiFillGithub />
                  </a>
                </button>
                <button>
                  <a href={item.pageURL} target="_blank">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
              <h4 className="appName">{item.nombre}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="container-pagination">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(images.length / imagesPerPage)}
            color="secondary"
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
          />
        </Stack>
      </div>
    </section>
  );
};

export default Portfolio;
