import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default class RegistrationPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/login";
    history.push(destination);
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
