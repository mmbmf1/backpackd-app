import React from "react";
import { Link } from "react-router-dom";
import ItemContext from "../../contexts/ItemContext";
import Backpack from "../Backpack/Backpack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faDumbbell,
  faTrash,
  faEdit,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import BackpackApiService from "../../services/backpacks-api-service";
import TokenService from "../../services/token-service";

export default class BackpackCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backpacks: [],
      isToggleOn: "",
      rotate: false,
      loading: true,
      deleteBackpack: (backpackId) => {
        this.setState({
          backpacks: this.state.backpacks.filter(
            (backpack) => backpack.id !== backpackId
          ),
        });
      },
    };
    console.log(this.state.loading);
  }
  static contextType = ItemContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    console.log(this.context.loading);
    const user_name = TokenService.getUser();
    if (!TokenService.hasAuthToken()) {
      BackpackApiService.getBackpacks()
        .then((backpacks) => this.context.setBackpacks(backpacks))
        .then(() => this.setState({ loading: false }));
    } else {
      BackpackApiService.getUserBackpacks(user_name)
        .then((backpacks) => this.context.setBackpacks(backpacks))
        .then(() => this.setState({ loading: false }));
    }
  }

  handleDelete = (ev, backpack_id) => {
    BackpackApiService.deleteUserBackpack(backpack_id)
      .then(this.context.deleteBackpack(backpack_id))
      .then(this.props.history.push("/backpacks"));
  };

  handleClick = (e, name) => {
    this.setState({
      isToggleOn: this.state.isToggleOn === name ? "" : name,
    });
    this.setState({
      rotate: this.state.rotate === name ? "" : name,
    });
  };

  render() {
    const backpacks = this.context.backpacks;
    return this.state.loading ? (
      <div className="load-container">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    ) : (
      <div className="backpack-container">
        <section className="cards">
          {backpacks.map((backpack, key) => (
            <div className="card" key={key}>
              <div className="backpack_background"></div>
              <h2>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`chev-rotate-${
                    this.state.rotate === backpack.name
                  }`}
                  onClick={(e) => this.handleClick(e, backpack.name)}
                />
                {backpack.name}
              </h2>
              <div className="card_options">
                <FontAwesomeIcon icon={faDumbbell} />
                <p>{parseFloat(backpack.total).toFixed(2)} lbs</p>
                <Link className="card_button" to={`/edit/${backpack.id}`}>
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <button
                  className="card_button"
                  type="submit"
                  disabled={!TokenService.hasAuthToken()}
                  onClick={(ev) => this.handleDelete(ev, backpack.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div
                className={`category-display-${
                  this.state.isToggleOn === backpack.name
                }`}
              >
                <Backpack backpacks={backpacks} id={backpack.id} />
              </div>
            </div>
          ))}
        </section>
        <div className="add_button">
          <Link className="Button Add" to={"/add_backpack"}>
            <span>
              <FontAwesomeIcon icon={faPlus} />
              Backpack
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
