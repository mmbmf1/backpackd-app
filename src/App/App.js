import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Backpack from "../Backpack/Backpack";
import AddBackpack from "../AddBackpack/AddBackpack";
import BackpackCollection from "../BackpackCollection/BackpackCollection";
import items from "../items";

import ItemContext from "../ItemContext";

export default class App extends React.Component {
  static contextType = ItemContext;

  constructor() {
    super();
    this.state = {
      items,
      backpacks: [
        {
          id: 1,
          name: {value: 'Test', touched: true},
          userItems: {
            'Backpack Gear': {
              'Pack': {
                brand: 'Test Brand',
                size: 'Test size',
                weight: 'Test weight',
              },
            },

            'Shelter': {
              'Tent': {
                brand: 'Test brand 2',
                size: 'Test size 2',
                weight: 'Test weight 2',
              },
            },
          },
          summary: {
            total: [5]
          },
        }
      ],
      addBackpack: backpack => {
        this.setState({ backpacks: [...this.state.backpacks, backpack] });
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
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/backpacks"} component={BackpackCollection} />
          <Route exact path={'/backpacks/:backpack_id'} component={Backpack} />
          <Route path={"/add_backpack"} component={AddBackpack} />
          <Route path={"/login"} component={LoginForm} />
          <Route path={"/register"} component={RegistrationForm} />
        </main>
      </ItemContext.Provider>
    );
  }
}
