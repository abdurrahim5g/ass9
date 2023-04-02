import React from "react";

const Text = (props) => {
  return <p className={`text-gray-100 ${props.className}`}>{props.children}</p>;
};

export default Text;
