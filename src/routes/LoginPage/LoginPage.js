import React from "react";
import { Link } from "react-router-dom";
import ItemsContext from "../../contexts/ItemContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import TokenService from "../../services/token-service";

export default class LoginPage extends React.Component {
  static contextType = ItemsContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const user_id = TokenService.getUser();
    this.props.history.push(`/backpacks/${user_id}`);
  };

  render() {
    return (
      <div className="Login__main">
        {/* <h2>Login</h2> */}
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <div className="Register__link">
          <p>Not Registered?</p>
          <Link className="r_link" to={"/register"}>
            Create an Account
          </Link>
        </div>
      </div>
    );
  }
}
