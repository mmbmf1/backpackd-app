import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function App() {
  return (
    <div>
      <header className="App__header">
        <Header />
      </header>
      <main className="App__main">
        <Route
          path={'/login'}
          component={LoginForm} />
        <Route
          path={'/register'}
          component={RegistrationForm} />
      </main>
    </div>
  );
}

export default App;
