import React from "react";
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends React.Component {
  static defaultProps = {
    onRegistratinSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { first_name, last_name, user_email, user_name, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_email: user_email.value,
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        user_email.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistratinSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    // console.log(this.state)
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div>
          {error && <p>{error}</p>}
        </div>
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
