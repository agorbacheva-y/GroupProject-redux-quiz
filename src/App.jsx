import React from "react";
import { useSelector } from "react-redux";
import './App.css'

import { CurrentQuestion } from "./components/CurrentQuestion";
import { AnswerOptions } from "./components/AnswerOptions";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Summary from "./components/Summary";

export const App = () => {
  const quiz = useSelector((state) => state.quiz);

  return (
    <div className="quizApp">
      {quiz.quizOver ? (
        <Summary />
      ) : (
        <>
          
          <CurrentQuestion />
          <AnswerOptions />
        </>
      )}


    </div>
  );
};
