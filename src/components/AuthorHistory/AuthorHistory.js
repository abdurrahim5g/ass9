import React from "react";
import Batch from "../Batch/Batch";
import Text from "../Text/Text";
import Title from "../Title/Title";

const AuthorHistory = () => {
  return (
    <div className="author-history welcome bg-slate-300 rounded-2xl shadow-sm py-7 px-6">
      <Title className={"text-xl md:text-2xl"}>Author History</Title>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Text>
          Total points <Batch>708</Batch>
        </Text>
        <Text>
          Quiz Attemd <Batch>88</Batch>
        </Text>
        <Text>
          Profile <Batch>Plus</Batch>
        </Text>
        <Text>
          Pending Quiz <Batch>10</Batch>
        </Text>
      </div>
    </div>
  );
};

export default AuthorHistory;
