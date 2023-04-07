import React from "react";
import Option from "../Option/Option";
import Title from "../Title/Title";
import { UilEye } from "@iconscout/react-unicons";
import { showAnswer } from "../../utility/utility";

const SingleQuestion = ({ singleQuestion }) => {
  const { question, options, correctAnswer } = singleQuestion;

  let questionStr = (q) => {
    const questionsText = q.replace(/<[^>]*>/g, "");
    return questionsText;
  };

  const handleShowCorrectAnswer = (correctAns) => {
    showAnswer(true, correctAns);
  };

  //   console.log(singleQuestion);
  return (
    <div className="single-questions shadow-md rounded-lg py-7 px-4 bg-slate-50">
      <Title
        className="text-lg flex items-center justify-between"
        style={{ color: "gray" }}
      >
        {questionStr(question)}{" "}
        <button onClick={() => handleShowCorrectAnswer(correctAnswer)}>
          <UilEye></UilEye>
        </button>
      </Title>
      <div className="grid gap-6 mt-5">
        {options.map((option, index) => (
          <Option
            key={index}
            option={option}
            id={singleQuestion.id}
            index={index}
            correctAnswer={correctAnswer}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default SingleQuestion;
