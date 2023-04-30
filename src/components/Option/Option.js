import React, { useEffect, useState } from "react";
import "./Option.css";
import { useQuiz } from "../../Contex/QuizContex";

const Option = ({ option, id, correctAnswer, index }) => {
  const { quizState, setQuizState } = useQuiz();

  const [answer, setAnswer] = useState(false);
  useEffect(() => {}, [answer]);

  const handleCorrectAnswer = (id) => {
    const selectedAnswer = document.getElementById(id).value;
    if (selectedAnswer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
    console.log(selectedAnswer, correctAnswer);
  };

  const storeAnswer = (ans) => {
    setQuizState({
      ...quizState,
      answers: { ...quizState.answers, [quizState.currentQuizIndex]: ans },
    });

    // quizState.answers[quizState.currentQuizIndex] = ans;
  };

  return (
    <div className="option-component  relative">
      <input
        type="radio"
        id={`${id}-${index}`}
        name={id}
        className="w-0 absolute top-4 left-8"
        value={option}
      />
      <label
        htmlFor={`${id}-${index}`}
        className={`block cursor-pointer py-3 px-4 bg-slate-200 rounded-lg shadow-md ${
          answer && "correct"
        }`}
        onClick={() => {
          handleCorrectAnswer(`${id}-${index}`);
          storeAnswer(option);
        }}
      >
        {option}
      </label>
    </div>
  );
};

export default Option;
