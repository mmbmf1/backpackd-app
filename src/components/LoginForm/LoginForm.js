import React from "react";

export default class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/backpacks");
  };
  render() {
    return (
      <form className="LoginForm" onSubmit={e => this.handleSubmit(e)}>
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
        <input className='Button' type="submit" value="Login" />
      </form>
    );
  }
}
