import React from "react";
import Batch from "../../Batch/Batch";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SingleQuestion from "../../SingleQuestion/SingleQuestion";
import Text from "../../Text/Text";
import Title from "../../Title/Title";
import "./QuizSinglePage.css";
import { showAnswer } from "../../../utility/utility";
import { useQuiz } from "../../../Contex/QuizContex";

import gitLogo from "../../../assets/images/github.png";

const QuizPageContainer = ({ quizInfo }) => {
  const quizData = quizInfo.data;
  const questions = quizData.questions;

  const { quizState, setQuizState } = useQuiz();

  console.log(quizState);

  // handle next button
  const handleNextButton = (newIndex) => {
    const correctAns = questions[quizState.currentQuizIndex].correctAnswer;
    console.log(correctAns, quizState.answers[quizState.currentQuizIndex]);
    if (correctAns === quizState.answers[quizState.currentQuizIndex]) {
      setQuizState({
        ...quizState,
        currentQuizIndex: newIndex,
        score: quizState.score + 1,
      });
    } else {
      setQuizState({ ...quizState, currentQuizIndex: newIndex });
    }
  };

  // handle prev button
  const handlePrevButton = (newIndex) => {
    setQuizState({ ...quizState, currentQuizIndex: newIndex });
    console.log(newIndex, quizState.currentQuizIndex);
  };

  // handle Submit button
  const handleSubmit = () => {
    const correctAns = questions[quizState.currentQuizIndex].correctAnswer;
    console.log(correctAns, quizState.answers[quizState.currentQuizIndex]);
    if (correctAns === quizState.answers[quizState.currentQuizIndex]) {
      setQuizState({
        ...quizState,
        score: quizState.score + 1,
        submit: true,
      });
    } else {
      setQuizState({ ...quizState, submit: true });
    }
  };

  return (
    <section className="quiz-details">
      <div className="container">
        <div className="quiz-header grid grid-cols-1 md:grid-cols-2 py-16">
          <div className="flex items-center quiz-info">
            <div className="quiz-image mr-5">
              <img
                src={quizData.id === 5 ? gitLogo : quizData.logo}
                alt="quiz logo"
                className="w-20 rounded shadow-lg"
              />
            </div>
            <div className="quiz-basic-info">
              <Title
                className="text-gray-600 text-xl lg:text-2xl"
                style={{ color: "gray" }}
              >
                Quiz name: {quizData.name}
              </Title>
              <Text className="text-slate-600">
                Total:{" "}
                <Batch className="bg-blue-50 px-3 py-1 ">
                  {quizData.total} quiz
                </Batch>
              </Text>
            </div>
          </div>

          <div className="user-mark-info text-center hidden md:block">
            <Title className="text-xl" style={{ color: "gray" }}>
              Quiz number
            </Title>
            <Text className="text-slate-600">
              {quizState.currentQuizIndex + 1} out of {quizData.total}
            </Text>
          </div>
        </div>

        <div className="questions-area">
          <SectionHeading
            title={`${quizData.name}`}
            subtitle="All questions of"
            className="mb-16"
          ></SectionHeading>

          <div className="questions-body mb-20 w-12/12 md:w-8/12 lg:w-6/12 mx-auto">
            {!quizState.submit ? (
              <div className="grid  gap-10">
                <SingleQuestion
                  key={questions[quizState.currentQuizIndex].id}
                  singleQuestion={questions[quizState.currentQuizIndex]}
                ></SingleQuestion>

                <div className="next-prev grid gap-4 grid-cols-2 w-12/12 md:w-8/12 lg:w-6/12 mx-auto">
                  <button
                    className="rounded px-10 py-3 bg-red-200 hover:bg-red-300 font-semibold text-gray-800"
                    onClick={() =>
                      handlePrevButton(quizState.currentQuizIndex - 1)
                    }
                    disabled={quizState.currentQuizIndex === 0 && true}
                  >
                    Previous
                  </button>
                  {questions.length !== quizState.currentQuizIndex + 1 ? (
                    <button
                      className="rounded px-10 py-3 bg-blue-500 hover:bg-blue-400 font-semibold text-gray-800"
                      onClick={() =>
                        handleNextButton(quizState.currentQuizIndex + 1)
                      }
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="rounded px-10 py-3 bg-blue-500 hover:bg-blue-600 font-semibold text-gray-800"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <Title className="text-slate-600 text-center">
                Your score is {quizState.score} out of {quizData.total}
              </Title>
            )}
          </div>
        </div>
      </div>

      <div className="answer-popup hidden" id="answer-popup">
        <div className="backdrop" onClick={() => showAnswer(false)}></div>
        <div className="answer-container">
          <div className="content">
            <h5 id="correctAns" className="text-center">
              ...
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPageContainer;
