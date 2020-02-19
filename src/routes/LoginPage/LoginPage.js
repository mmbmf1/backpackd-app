import React from "react";
import { Link } from "react-router-dom";
import ItemsContext from "../../contexts/ItemContext";
import LoginForm from "../../components/LoginForm/LoginForm";
// import TokenService from "../../services/token-service";

export default class LoginPage extends React.Component {
  static contextType = ItemsContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    this.props.history.push("/backpacks");
  };

  render() {
    return (
      <div className="Login__main">
        <div className="login_background"></div>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <div className="Register__link">
          <p>Don't have an account?</p>
          <Link className="r_link" to={"/register"}>
            Register Here
          </Link>
        </div>
      </div>
    );
  }
}
