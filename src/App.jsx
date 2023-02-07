import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections-container">
        <AboutMe />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
