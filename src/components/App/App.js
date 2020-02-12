import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
// import LoginForm from "../LoginForm/LoginForm";
// import RegistrationForm from "../RegistrationForm/RegistrationForm";
import AddBackpack from "../AddBackpack/AddBackpack";
import BackpackCollection from "../BackpackCollection/BackpackCollection";
import items from "../../items";
import ItemContext from "../../contexts/ItemContext";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";

export default class App extends React.Component {
  static contextType = ItemContext;

  constructor() {
    super();
    this.state = {
      items,
      backpacks: [],
      // addBackpack: backpack => {
      //   this.setState({ backpacks: [...this.state.backpacks, backpack] });
      //   return this.state;
      // },
      
      setBackpacks: backpacks => {
        Object.values(backpacks).map(backpack =>
          this.setState({ backpacks: [...this.state.backpacks, backpack] })
        );
        return this.state
      }
    };
  }

  render() {
    return (
      <ItemContext.Provider value={this.state}>
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/backpacks"} component={BackpackCollection} />
            <Route path={"/add_backpack"} component={AddBackpack} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </ItemContext.Provider>
    );
  }
}
