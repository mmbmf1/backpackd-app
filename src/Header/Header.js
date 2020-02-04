import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <nav className="Header">
      <h1>
        <Link to="/"><FontAwesomeIcon icon={faHiking} />{' '}backpackd</Link>
      </h1>
      <div className="nav__link">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Header;
