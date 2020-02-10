import React from "react";
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends React.Component {
  static defualtProps = {
    onLoginSuccess: () => {}
  }

  state = {error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )

    user_name.value = ''
    password.value =''
    // this.props.onLoginSuccess()
  }


  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    console.log('login form submitted')
    console.log({ user_name, password })

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
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
