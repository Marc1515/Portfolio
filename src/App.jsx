import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import BurguerButton from "./components/BurguerButton/BurguerButton";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Navbar />
        <div className="sections-container">
          <div className="container-burguerButton">
            <BurguerButton />
          </div>
          <AboutMe />
          <Experience />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
