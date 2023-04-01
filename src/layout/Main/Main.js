import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
  return (
    <main className="main-container">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </main>
  );
};

export default Main;
