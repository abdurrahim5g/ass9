import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../Title/Title";
import "./QuizSinglePage.css";
import QuizPrivider from "../../../Contex/QuizContex";
import QuizPageContainer from "./QuizPageContainer";

const QuizSinglePage = () => {
  const quizInfo = useLoaderData();

  return quizInfo.status ? (
    <QuizPrivider>
      <QuizPageContainer quizInfo={quizInfo}></QuizPageContainer>
    </QuizPrivider>
  ) : (
    <section className="no-quiz">
      <div className="conteiner">
        <Title className="text-center py-20 text-slate-600">
          No quiz available
        </Title>
      </div>
    </section>
  );
};

export default QuizSinglePage;
