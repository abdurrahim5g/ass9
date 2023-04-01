import React from "react";
import AuthorHistory from "../AuthorHistory/AuthorHistory";
import SectionHeading from "../SectionHeading/SectionHeading";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <>
      <div className="hero-area py-12">
        <div className="container ">
          <div className="grid grid-cols-3 gap-8">
            <div className="welcome-section ">
              <Welcome></Welcome>
            </div>
            <div className="information-section col-span-2">
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
          ></SectionHeading>
        </div>
      </div>
    </>
  );
};

export default Home;
