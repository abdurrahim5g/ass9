import React from "react";

const Title = (props) => {
  return (
    <h4 className={`text-2xl mb-2 text-white font-semibold ${props.className}`}>
      {props.children}
    </h4>
  );
};

export default Title;
