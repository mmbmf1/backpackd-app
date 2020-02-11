import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default class RegistrationPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    // this.props.history.push('/login')
    const { history } = this.props;
    history.push("/login");
  };

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
