import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default class RegistrationPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="Registration__main">
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}
