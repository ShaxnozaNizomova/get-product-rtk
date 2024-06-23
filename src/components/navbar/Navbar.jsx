import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__items">
        <ul className="navbar__menu">
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/createProduct"}>Create Product</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
