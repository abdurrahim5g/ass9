import React from "react";
import AuthorHistory from "../AuthorHistory/AuthorHistory";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
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
  );
};

export default Home;
