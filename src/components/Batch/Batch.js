import React from "react";

const Batch = (props) => {
  return (
    <span
      className={`inline-block rounded bg-white px-1 shadow-sm text-blue-500 text-sm align-middle ${props.className}`}
    >
      {props.children}
    </span>
  );
};

export default Batch;
