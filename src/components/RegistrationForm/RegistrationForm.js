import React from "react";
import ValidationError from "../../ValidationError";
import AuthApiService from "../../services/auth-api-service";

export default class RegistrationForm extends React.Component {
  static defaultProps = {
    onRegistratinSuccess: () => {}
  };

  state = {
    error: ""
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const {
      first_name,
      last_name,
      user_email,
      user_name,
      password
    } = ev.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_email: user_email.value,
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        first_name.value = "";
        last_name.value = "";
        user_email.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const error = this.state.error;
    return (
      <form className="RegistrationForm" onSubmit={ev => this.handleSubmit(ev)}>
        <h2>Create Your Account</h2>
        <div className="registration_background"></div>
        <ValidationError message={error} />
        <div className="form_input">
          <label htmlFor="Registration__first_name">
            First Name<span className="Required">*</span>
          </label>
          <input
            className="reg_input"
            name="first_name"
            type="text"
            required
            id="RegistrationForm__first_name"
          ></input>
        </div>
        <div className="form_input">
          <label htmlFor="RegistrationForm__last_name">
            Last Name<span className="Required">*</span>
          </label>
          <input
            className="reg_input"
            name="last_name"
            type="text"
            required
            id="RegistrationForm__last_name"
          ></input>
        </div>
        <div className="form_input">
          <label htmlFor="RegistrationForm__user_email">
            Email<span className="Required">*</span>
          </label>
          <input
            className="reg_input"
            name="user_email"
            type="email"
            required
            id="RegistrationForm__user_email"
          ></input>
        </div>
        <div className="form_input">
          <label htmlFor="Registration__user_name">
            User Name<span className="Required">*</span>
          </label>
          <input
            className="reg_input"
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          />
        </div>
        <div className="form_input">
          <label htmlFor="Registration__password">
            Password<span className="Required">*</span>
          </label>
          <input
            className="reg_input"
            name="password"
            type="password"
            required
            id="RegistrationFrom__password"
            autoComplete="new-password"
          />
        </div>
        <div className="register_btn_container">
          <button className="Button" type="submit">
            <span>Get Started!</span>
          </button>
        </div>
      </form>
    );
  }
}
