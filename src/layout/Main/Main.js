import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [location]);

  return (
    <main className="main-container">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Main;
