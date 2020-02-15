import React from "react";
import { Route, Switch } from "react-router-dom";
import items from "../../items";
import ItemContext from "../../contexts/ItemContext";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import BackpackCollection from "../BackpackCollection/BackpackCollection";
import AddBackpack from "../AddBackpack/AddBackpack";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import PrivateRoute from "../Utils/PrivateRoute";
import TokenService from "../../services/token-service";

export default class App extends React.Component {
  static contextType = ItemContext;

  constructor() {
    super();
    this.state = {
      user_id: "",
      items,
      backpacks: [],
      loggedIn: false,
      setLoggedIn: loggedIn => this.setState({ loggedIn }),
      addBackpack: backpack => {
        console.log(backpack);
        this.setState({ backpacks: [...this.state.backpacks, backpack] });
      }
    };
  }

  componentDidMount() {
    this.setState({ loggedIn: TokenService.hasAuthToken() });
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
            <PrivateRoute
              exact
              path={"/backpacks/:user_id"}
              component={BackpackCollection}
            />
            <PrivateRoute
              exact
              path={"/add_backpack"}
              component={AddBackpack}
            />
            <PublicOnlyRoute exact path={"/login"} component={LoginPage} />
            <PublicOnlyRoute
              exact
              path={"/register"}
              component={RegistrationPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </ItemContext.Provider>
    );
  }
}
