import React from "react";
// import { useLoaderData } from "react-router-dom";
import AuthorHistory from "../AuthorHistory/AuthorHistory";
import QuizGrid from "../QuizGrid/QuizGrid";
import SectionHeading from "../SectionHeading/SectionHeading";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <>
      <div className="hero-area py-12">
        <div className="container ">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
            <div className="welcome-section ">
              <Welcome></Welcome>
            </div>
            <div className="information-section lg:col-span-2">
              <AuthorHistory></AuthorHistory>
            </div>
          </div>
        </div>
      </div>
      <div className="quiz-section py-16 bg-slate-50">
        <div className="container">
          <SectionHeading
            title="Trending Quizs"
            subtitle={"Explore our"}
            className="mb-6"
          ></SectionHeading>
          <QuizGrid></QuizGrid>
        </div>
      </div>
    </>
  );
};

export default Home;
