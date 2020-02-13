import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";

export default class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearUser()
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged_in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">
            <FontAwesomeIcon icon={faHiking} /> backpackd
          </Link>
        </h1>
        <div className="nav__link">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          {/* {console.log(TokenService.hasAuthToken())} */}
        </div>
      </nav>
    );
  }
}
