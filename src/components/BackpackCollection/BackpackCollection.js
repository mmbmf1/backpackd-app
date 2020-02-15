import React from "react";
import { Link } from "react-router-dom";
import ItemContext from "../../contexts/ItemContext";
import Backpack from "../Backpack/Backpack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BackpackApiService from "../../services/backpacks-api-service";
import TokenService from "../../services/token-service";

export default class BackpackCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backpacks: [],
      isToggleOn: "",
      deleteBackpack: backpackId => {
        this.setState({
          backpacks: this.state.backpacks.filter(
            backpack => backpack.id !== backpackId
          )
        });
      }
    };
  }
  static contextType = ItemContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  componentDidMount() {
    const user_name = TokenService.getUser();
    if (!TokenService.hasAuthToken()) {
      BackpackApiService.getBackpacks().then(backpacks =>
        Object.values(backpacks).forEach(backpack => {
          this.setState({ backpacks: [...this.state.backpacks, backpack] });
        })
      );
    } else {
      BackpackApiService.getUserBackpacks(user_name).then(backpacks =>
        Object.values(backpacks).forEach(backpack => {
          this.setState({ backpacks: [...this.state.backpacks, backpack] });
        })
      );
    }
  }

  handleDelete = (ev, id) => {
    this.state.deleteBackpack(id);
    this.context.deleteBackpack(id);
    BackpackApiService.deleteUserBackpack(id);
    this.props.history.push("/backpacks");
  };

  handleClick = (e, name) => {
    this.setState({
      isToggleOn: this.state.isToggleOn === name ? "" : name
    });
  };

  render() {
    const backpacks = this.state.backpacks;
    return (
      <div className="backpack-container">
        <section className="cards">
          {backpacks.map((backpack, key) => (
            <div className="card" key={key}>
              <h2>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={e => this.handleClick(e, backpack.name)}
                />
                {backpack.name}
              </h2>
              <p>Total Weight: {backpack.total} lbs</p>
              <div
                className={`category-display-${this.state.isToggleOn ===
                  backpack.name}`}
              >
                <Backpack backpacks={backpacks} id={backpack.id} />
                <button
                  type="submit"
                  disabled={!TokenService.hasAuthToken()}
                  onClick={ev => this.handleDelete(ev, backpack.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
        <br />
        <Link className="Button" to={"/add_backpack"}>
          Add Backpack To Collection
        </Link>
      </div>
    );
  }
}
