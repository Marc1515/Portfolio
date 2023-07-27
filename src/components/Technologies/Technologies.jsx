import React, { useState } from "react";
import "./Technologies.css";
import TechImages from "./Technologies";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Technologies = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <section id="technologies" className="tech-container">

      {/* Sección -> HTML, CSS y JavaScript */}

      <h1>
        <span>Tecnologías</span>
      </h1>

      <span className="title-tech">Básicas</span>

      <div className="container-img-tech">
        <img src={TechImages.techBuild.htmlSVG} alt="" />
        <img src={TechImages.techBuild.cssSVG} alt="" />
        <img src={TechImages.techBuild.javaScriptSvg} alt="" />
      </div>

      <div
        className={`custom-details ${openSection === "BT" ? "open" : ""}`}
        onClick={() => toggleSection("BT")}
      >
        <div className="toggle-container">
          <p className="summary">HTML, CSS y JavaScript</p>
          <span className="icon-arrow">
            {openSection === "BT" ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </div>
        <div className="content">
          {TechImages.techDescriptions.htmlCssJs}  {/* Descripción de las tecnologías */}
        </div>
      </div>

      
      <hr className="horizontal-line" />

      {/* Sección -> Taildwind y Bootstrap */}

      <span className="title-tech">Librerías para CSS</span>

      <div className="container-img-tech">
        <img src={TechImages.techBuild.tailwindSvg} alt="" />
        <img src={TechImages.techBuild.bootstrapSVG} alt="" />
      </div>

      <div
        className={`custom-details ${openSection === "LC" ? "open" : ""}`}
        onClick={() => toggleSection("LC")}
      >
        <div className="toggle-container">
          <p className="summary">Tailwind y Bootstrap</p>
          <span className="icon-arrow">
            {openSection === "LC" ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </div>
        <div className="content">
          {TechImages.techDescriptions.tailwindBootstrap}  {/* Descripción de las tecnologías */}
        </div>
      </div>

      
      <hr className="horizontal-line" />

      {/* Sección -> Typescript y RxJS */}

      <span className="title-tech">Superset y librerías</span>

      <div className="container-img-tech">
        <img src={TechImages.techBuild.typeScriptSvg} alt="" />
        <img src={TechImages.techBuild.rxjsSvg} alt="" />
      </div>

      <div
        className={`custom-details ${openSection === "TR" ? "open" : ""}`}
        onClick={() => toggleSection("TR")}
      >
        <div className="toggle-container">
          <p className="summary">Typescript y RxJS</p>
          <span className="icon-arrow">
            {openSection === "TR" ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </div>
        <div className="content">
          {TechImages.techDescriptions.typescriptRxjs}  {/* Descripción de las tecnologías */}
        </div>
      </div>


      <hr className="horizontal-line" />

      {/* Sección -> React y Angular */}

      <span className="title-tech">Frameworks</span>

      <div className="container-img-tech">
        <img src={TechImages.techBuild.reactSVG} alt="" />
        <img src={TechImages.techBuild.angularSVG} alt="" />
      </div>

      <div
        className={`custom-details ${openSection === "F" ? "open" : ""}`}
        onClick={() => toggleSection("F")}
      >
        <div className="toggle-container">
          <p className="summary">React y Angular</p>
          <span className="icon-arrow">
            {openSection === "F" ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </div>
        <div className="content">
          {TechImages.techDescriptions.reactAngular}  {/* Descripción de las tecnologías */}
        </div>
      </div>


      <hr className="horizontal-line" />

      {/* Sección -> Wordpress y WooCommerce */}

      <span className="title-tech">CMS</span>

      <div className="container-img-tech">
        <img src={TechImages.techBuild.wordpressSVG} alt="" />
        <img src={TechImages.techBuild.wooCommerceSVG} alt="" />
      </div>

      <div
        className={`custom-details ${openSection === "WW" ? "open" : ""}`}
        onClick={() => toggleSection("WW")}
      >
        <div className="toggle-container">
          <p className="summary">Wordpress y WooCommerce</p>
          <span className="icon-arrow">
            {openSection === "WW" ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </div>
        <div className="content">
          {TechImages.techDescriptions.wordpressWoocommerce}  {/* Descripción de las tecnologías */}
        </div>
      </div>

      <hr className="horizontal-line" />

      <div className="endExplication-container">
        <span>También tengo nociones con lenguajes como <strong>PHP</strong> y <strong>Java</strong>.</span>

        <span>Conozco como funcionan las bases de datos <strong>relacionales</strong> y <strong>no-relacionales</strong>, aunque no tengo conocimientos profundos sobre ellas.</span>

        <span>Sigo mejorando mis conocimientos con el <strong>Back-end</strong>, específicamente con el framework la librería <strong>Node.js</strong> y el framework <strong>Next.js</strong>.</span>
      </div>


      
      

    </section>
  );
};

export default Technologies;
