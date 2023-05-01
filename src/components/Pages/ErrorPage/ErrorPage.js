import React from "react";
import errorImg from "./404.gif";

const ErrorPage = () => {
  console.log(errorImg);
  return (
    <section className="error-page text-center">
      <img src={errorImg} alt="" className="mx-auto" />
    </section>
  );
};

export default ErrorPage;
