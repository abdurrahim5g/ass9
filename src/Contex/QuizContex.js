import React, { createContext, useContext, useState } from "react";

const QuizContex = createContext();
export const useQuiz = () => useContext(QuizContex);

const QuizPrivider = ({ children }) => {
  const [quizState, setQuizState] = useState({
    currentQuizIndex: 0,
    answers: {},
    score: 0,
    submit: false,
  });

  const value = { quizState, setQuizState };

  return <QuizContex.Provider value={value}>{children}</QuizContex.Provider>;
};

export default QuizPrivider;
