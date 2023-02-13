import { useContext } from "react";
import "./BurguerButton.css";
import { appContext } from "../../context/appContext";

const BurguerButton = () => {
  /*   const handleClick = (e) => {
    const widthScreen = window.screen.width;
    if (widthScreen <= 767) {
      setClicked(!clicked);
    }
  }; */
  const { clicked, setClicked } = useContext(appContext);

  return (
    <div
      onClick={() => {
        setClicked(!clicked);
      }}
      className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurguerButton;
