import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Backpack from "../Backpack/Backpack";
import AddBackpack from "../AddBackpack/AddBackpack";
import items from "../items";

import ItemContext from "../ItemContext";

export default class App extends React.Component {
  static contextType = ItemContext;

  constructor() {
    super();
    this.state = {
      items
    };
  }

  render() {
    // console.log(this.state);
    return (
      <ItemContext.Provider value={this.state}>
          <header className="App__header">
            <Header />
          </header>
          <main className="App__main">
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/mock_backpack"} component={Backpack} />
            <Route path={"/login"} component={LoginForm} />
            <Route path={"/register"} component={RegistrationForm} />
            <Route path={"/add_backpack"} component={AddBackpack} />
          </main>
      </ItemContext.Provider>
    );
  }
}
