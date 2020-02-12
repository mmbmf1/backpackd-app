import React from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

export default class LoginForm extends React.Component {
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
        // console.log(res.payload)
        const { user_id } = res.payload
        console.log(user_id)//could I take this user_id put it into context?// need to create a new branch for getting user backpacks
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={ev => this.handleSubmitJwtAuth(ev)}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User Name</label>
          <input
            className="Input"
            required
            name="user_name"
            id="LoginForm__user_name"
          ></input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <input
            className="Input"
            required
            name="password"
            type="password"
            id="LoginFrom__password"
          ></input>
        </div>
        <input className="Button" type="submit" value="Login" />
      </form>
    );
  }
}
