import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";
import ItemContext from "../../contexts/ItemContext";

export default class Header extends React.Component {
  static contextType = ItemContext;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUser();
    this.context.setLoggedIn(false);
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged_in">
        <Link onClick={this.handleLogoutClick} to="/login">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Login</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">
            <div className="bottom">
              <FontAwesomeIcon icon={faHiking} />
              <span className="home link">backpackd</span>
            </div>
          </Link>
        </h1>
        <div className="nav__link">
          {this.context.loggedIn
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    );
  }
}
