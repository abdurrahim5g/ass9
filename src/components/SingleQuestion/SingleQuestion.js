import React from "react";
import Option from "../Option/Option";
import Title from "../Title/Title";

const SingleQuestion = ({ singleQuestion }) => {
  const { question, options, correctAnswer } = singleQuestion;
  let questionStr = (q) => {
    const questionsText = q.replace(/<[^>]*>/g, "");
    return questionsText;
  };

  //   console.log(singleQuestion);
  return (
    <div className="single-questions shadow-md rounded-lg py-7 px-4 bg-slate-50">
      <Title className="text-slate-600 text-lg">{questionStr(question)}</Title>
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
