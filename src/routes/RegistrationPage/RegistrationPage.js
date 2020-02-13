import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default class RegistrationPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/login'
    history.push(destination)}

  render() {
    return (
      <div>
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}
