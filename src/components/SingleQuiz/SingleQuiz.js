import React from "react";
import { Link } from "react-router-dom";
import Batch from "../Batch/Batch";
import Text from "../Text/Text";
import Title from "../Title/Title";
import githubLogo from "../../assets/images/github.png";

const SingleQuiz = ({ quizData }) => {
  const { name, logo, total, id } = quizData;
  return (
    <Link to={`/quiz/${id}`}>
      <div
        className={`single-quiz rounded-lg bg-white py-4 px-4 text-center shadow-md pb-8 `}
      >
        <img src={id === 5 ? githubLogo : logo} alt="Quiz Logo" />
        <Title className="text-gray-700 mt-4">{name}</Title>
        <Text className="text-slate-600">
          Total: <Batch className="bg-blue-50 px-3 py-1 ">{total} quiz</Batch>
        </Text>
      </div>
    </Link>
  );
};

export default SingleQuiz;
