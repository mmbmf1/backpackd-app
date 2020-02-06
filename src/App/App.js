import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Backpack from "../Backpack/Backpack";
import AddBackpack from "../AddBackpack/AddBackpack";
import BackpackCollection from "../BackpackCollection/BackpackCollection";
import items from "../items";
import ItemContext from "../ItemContext";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default class App extends React.Component {
  static contextType = ItemContext;

  constructor() {
    super();
    this.state = {
      items,
      backpacks: [
        {
          id: 1,
          name: { value: "Test", touched: true },
          userItems: {
            "Backpack Gear": {
              Pack: {
                brand: "Gregory",
                size: "65L",
                weight: "4.4 lbs"
              }
            },

            Shelter: {
              Tent: {
                brand: "Big Agnes",
                size: "2 person",
                weight: "3.8 lbs"
              }
            }
          },
          summary: {
            total: [8.2]
          }
        }
      ],
      addBackpack: backpack => {
        this.setState({ backpacks: [...this.state.backpacks, backpack] });
        return this.state;
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
            <Route exact path={"/backpacks"} component={BackpackCollection} />
            <Route exact path={"/backpacks/:backpack_id"} component={Backpack} />
            <Route exact path={"/add_backpack"} component={AddBackpack} />
            <Route exact path={"/login"} component={LoginForm} />
            <Route exact path={"/register"} component={RegistrationForm} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </ItemContext.Provider>
    );
  }
}
