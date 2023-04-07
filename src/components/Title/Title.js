import React from "react";

const Title = ({ className, style, children }) => {
  return (
    <h4
      className={`text-2xl mb-2 text-gray-50 font-semibold ${className}`}
      style={style}
    >
      {children}
    </h4>
  );
};

export default Title;
