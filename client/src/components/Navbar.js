import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
      <img src="/logo.png" alt="Bitewise Logo" />
      </h2>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

