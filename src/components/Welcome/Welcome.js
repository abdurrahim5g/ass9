import React from "react";
import authorImg from "../../assets/images/avatar-img.png";
import Batch from "../Batch/Batch";
import Text from "../Text/Text";
import Title from "../Title/Title";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome rounded-2xl shadow-md py-5 px-4">
      <div className="flex items-center">
        <div className="author-image">
          <img src={authorImg} alt="Author" className="w-20 mr-6" />
        </div>
        <div className="author-info">
          <Title>Welcome, {"Abdur Rahim"}</Title>
          <Text>
            World Ranking: <Batch>145</Batch>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
