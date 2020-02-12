import React from "react";
import { Link } from "react-router-dom";
import ItemContext from "../../contexts/ItemContext";
import Backpack from "../Backpack/Backpack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import TokenService from "../../services/token-service";

export default class BackpackCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: ""
    };
  }
  static contextType = ItemContext;

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
                <Backpack id={backpack.id} />
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
