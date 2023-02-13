/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
/* import allQuestionsData from '../pages/PresentSimple/QuizPresentSimple/preguntas'; */

export const appContext = createContext();

export function AppContextProvider(props) {
  const [clicked, setClicked] = useState("");

  const valor = {
    clicked,
    setClicked,
  };

  return (
    <appContext.Provider value={valor}>{props.children}</appContext.Provider>
  );
}
