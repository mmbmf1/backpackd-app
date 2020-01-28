import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="Header">
      <h1>
        <Link to="/">backpackd</Link>
      </h1>
      <div className="nav__link">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Header;
