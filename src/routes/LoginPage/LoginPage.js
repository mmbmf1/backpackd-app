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
      <div>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <p>
          Don't have an account?
          <span>
            <Link to={"/register"}>Register Here</Link>
          </span>
        </p>
      </div>
    );
  }
}
