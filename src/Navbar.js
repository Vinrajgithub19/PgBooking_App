import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            PG<em>book</em>
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            {" "}
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/pgs">pgs</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
