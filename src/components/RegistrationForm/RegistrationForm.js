import React from "react";

export default class RegistrationForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/backpacks");
  };
  render() {
    return (
      <form className="RegistrationForm" onSubmit={e => this.handleSubmit(e)}>
        <div className="first_name">
          <label htmlFor="Registration__first_name">
            First Name<span className="Required">*</span>
          </label>
          <input
            className="Input"
            name="first_name"
            type="text"
            required
            id="RegistrationForm__first_name"
          ></input>
        </div>
        <div className="last_name">
          <label htmlFor="RegistrationForm__last_name">
            Last Name<span className="Required">*</span>
          </label>
          <input
            className="Input"
            name="last_name"
            type="text"
            required
            id="RegistrationForm__last_name"
          ></input>
        </div>
        <div className="user_email">
          <label htmlFor="RegistrationForm__user_email">
            Email<span className="Required">*</span>
          </label>
          <input
            className="Input"
            name="user_email"
            type="email"
            required
            id="RegistrationForm__user_email"
            autoComplete="on"
          ></input>
        </div>
        <div className="user_name">
          <label htmlFor="Registration__user_name">
            User Name<span className="Required">*</span>
          </label>
          <input
            className="Input"
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></input>
        </div>
        <div className="password">
          <label htmlFor="Registration__password">
            Password<span className="Required">*</span>
          </label>
          <input
            className="Input"
            name="password"
            type="password"
            required
            id="RegistrationFrom__password"
          ></input>
        </div>
        <button className="Button" type="submit">
          Register
        </button>
      </form>
    );
  }
}
