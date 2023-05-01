import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const QuizGrid = () => {
  const quiz = useLoaderData();

  return (
    <div className="quiz-conteiner">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {quiz.data.map((singleQuiz) => (
          <SingleQuiz quizData={singleQuiz} key={singleQuiz.id}></SingleQuiz>
        ))}
      </div>
    </div>
  );
};

export default QuizGrid;
