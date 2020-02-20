import React from "react";
import { Link } from "react-router-dom";
import ItemContext from "../../contexts/ItemContext";
import Backpack from "../Backpack/Backpack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faDumbbell,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
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
    console.log("mounted");
    const user_name = TokenService.getUser();
    if (!TokenService.hasAuthToken()) {
      BackpackApiService.getBackpacks().then(backpacks =>
        Object.values(backpacks).forEach(backpack => {
          this.setState({ backpacks: [...this.state.backpacks, backpack] });
        })
      );
    } else {
      BackpackApiService.getUserBackpacks(user_name)
        // .then(backpacks =>
        //   console.log(backpacks)
        // )
        .then(backpacks => this.context.setBackpacks(backpacks));
      // .then(backpacks =>
      //   Object.values(backpacks).forEach(backpack => {
      //     this.setState({ backpacks: [...this.state.backpacks, backpack] });
      //   })
      // );
    }
  }

  handleDelete = (ev, backpack_id) => {
    this.context.deleteBackpack(backpack_id);
    this.state.deleteBackpack(backpack_id);
    BackpackApiService.deleteUserBackpack(backpack_id);
    this.props.history.push("/backpacks");
  };

  handleClick = (e, name) => {
    this.setState({
      isToggleOn: this.state.isToggleOn === name ? "" : name
    });
  };

  render() {
    const backpacks = this.context.backpacks;
    return (
      <div className="backpack-container">
        <section className="cards">
          {/* <div className="backpack_background"></div> */}
          {backpacks.map((backpack, key) => (
            <div className="card" key={key}>
              <div className="backpack_background"></div>
              <h2>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  onClick={e => this.handleClick(e, backpack.name)}
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
                  onClick={ev => this.handleDelete(ev, backpack.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div
                className={`category-display-${this.state.isToggleOn ===
                  backpack.name}`}
              >
                <Backpack backpacks={backpacks} id={backpack.id} />
              </div>
            </div>
          ))}
        </section>
        <div className="add_button">
          <Link className="Button" to={"/add_backpack"}>
            <span>Add Backpack</span>
          </Link>
        </div>
      </div>
    );
  }
}
