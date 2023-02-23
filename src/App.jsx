import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact";
import BurguerButton from "./components/BurguerButton/BurguerButton";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="container-burguerButton">
          <BurguerButton />
        </div>
        <div className="sections-wrapper">
          <div className="sections-container">
            <AboutMe />
            <Experience />
            <Portfolio />
            <Contact />
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
