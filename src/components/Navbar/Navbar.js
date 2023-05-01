import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/quiz-pro.svg";
import "./Navbar.css";

const Navbar = () => {
  const menuItem = [
    { name: "Home", path: "" },
    { name: "Blog", path: "blog" },
    { name: "Statistic", path: "statistic" },
  ];
  return (
    <nav className="navbar bg-slate-100 py-2 shadow-md relative z-10">
      <div className="container md:flex items-center justify-between">
        <div className="logo-area">
          <Link to={"/"}>
            <img src={logo} alt="Quiz Pro" width={200} className="mx-auto" />
          </Link>
        </div>
        <div className="menu-area mt-4 md:mt-0 flex justify-between">
          {menuItem.map((singleMenu, index) => (
            <NavLink
              to={`/${singleMenu.path}`}
              key={index}
              className="text-gray-600 text-sm md:ml-3"
            >
              {singleMenu.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
