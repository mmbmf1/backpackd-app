import React from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import ItemContext from "../../contexts/ItemContext";

export default class LoginForm extends React.Component {
  static contextType = ItemContext;
  static defafultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUser(res.sub);
        this.context.setLoggedIn(true);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        console.log(res);
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={ev => this.handleSubmitJwtAuth(ev)}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User Name:</label>
          <input
            className="login_input"
            required
            name="user_name"
            id="LoginForm__user_name"
          ></input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password:</label>
          <input
            className="login_input"
            required
            name="password"
            type="password"
            id="LoginFrom__password"
          ></input>
        </div>
        <div className="login_btn_container">
          <button className="Button" type="submit">
            <span>Login</span>
          </button>
        </div>
      </form>
    );
  }
}
