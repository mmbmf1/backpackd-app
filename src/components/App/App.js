import React from "react";
import { Route, Switch } from "react-router-dom";
import items from "../../items";
import ItemContext from "../../contexts/ItemContext";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import BackpackCollection from "../BackpackCollection/BackpackCollection";
import AddBackpack from "../AddBackpack/AddBackpack";
import EditBackpack from "../EditBackpack/EditBackpack";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import PrivateRoute from "../Utils/PrivateRoute";
import TokenService from "../../services/token-service";
import BackpackApiService from "../../services/backpacks-api-service";

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
        this.setState({ backpacks: [...this.state.backpacks, backpack] });
      },
      deleteBackpack: backpackId => {
        this.setState({
          backpacks: this.state.backpacks.filter(
            backpack => backpack.id !== backpackId
          )
        });
      },
      updateBackpack: updatedBackpack => {
        const newBackpacks = this.state.backpacks.map(backpack =>
          backpack.id === updatedBackpack.id ? updatedBackpack : backpack
        );
        this.setState({
          backpacks: newBackpacks
        });
      }
    };
  }

  componentDidMount() {
    const user_name = TokenService.getUser();
    this.setState({ loggedIn: TokenService.hasAuthToken() });
    if (TokenService.hasAuthToken()) {
      BackpackApiService.getUserBackpacks(user_name).then(backpacks =>
        Object.values(backpacks).forEach(backpack => {
          this.setState({ backpacks: [...this.state.backpacks, backpack] });
        })
      );
    } else {
      this.setState({ backpacks: [] });
    }
  }

  render() {
    return (
      <ItemContext.Provider value={this.state}>
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <Switch>
            <PublicOnlyRoute exact path={"/"} component={LandingPage} />
            <PrivateRoute
              exact
              path={"/backpacks"}
              component={BackpackCollection}
            />
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
            <PrivateRoute
              exact
              path={"/edit/:backpack_id"}
              component={EditBackpack}
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
        {/* <footer className="App__footer"></footer> */}
      </ItemContext.Provider>
    );
  }
}
