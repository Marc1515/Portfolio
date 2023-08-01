import React, { useState, useRef, useEffect } from "react";
import "./Portfolio.css";
import images from "./Portfolio";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 3;

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const displayedImages = images.slice(startIndex, endIndex);

  const cardsWrapperRef = useRef(null);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    if(cardsWrapperRef.current){
      cardsWrapperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="Portfolio-container">
      <h1>
        <span className="first-word-title">PORTFOLIO</span>
      </h1>
      <span>
        Aquí encontraras una variedad de Proyectos hechos en Angular,
        React o Wordpress.
      </span>
      <div className="cards-wrapper" ref={cardsWrapperRef}>
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
              <div className="svgContainer">
                {!(item.id === 6 || item.id === 7 || item.id === 8) &&
                  item.techBuild.htmlSVG && (
                    <img src={item.techBuild.htmlSVG} alt="" />
                  )}
                {!(item.id === 6 || item.id === 7 || item.id === 8) &&
                  item.techBuild.cssSVG && (
                    <img src={item.techBuild.cssSVG} alt="" />
                  )}
                {!(item.id === 6 || item.id === 7 || item.id === 8) &&
                  item.techBuild.typeScriptSvg && (
                    <img src={item.techBuild.typeScriptSvg} alt="" />
                  )}
                {(item.id === 1 || item.id === 2) &&
                  item.techBuild.angularSVG && (
                    <img src={item.techBuild.angularSVG} alt="" />
                  )}
                {(item.id === 3 || item.id === 4 || item.id === 5) &&
                  item.techBuild.javaScriptSvg && (
                    <img src={item.techBuild.javaScriptSvg} alt="" />
                  )}
                {(item.id === 3 || item.id === 4 || item.id === 5) &&
                  item.techBuild.reactSVG && (
                    <img src={item.techBuild.reactSVG} alt="" />
                  )}
                {(item.id === 6 || item.id === 7 || item.id === 8) &&
                  item.techBuild.wordpressSVG && (
                    <img src={item.techBuild.wordpressSVG} alt="" />
                  )}
                {item.id === 7 && item.techBuild.wooSVG && (
                  <img src={item.techBuild.wooSVG} alt="" />
                )}
              </div>
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
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </section>
  );
};

export default Portfolio;
