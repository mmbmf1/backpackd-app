import React from "react";
import BackpackApiService from "../../services/backpacks-api-service";
import ItemContext from "../../contexts/ItemContext";
import ValidationError from "../../ValidationError";
import { findBackpackName } from "../../backpack-helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";

export default class AddBackpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: "",
      name: "",
      useritems: {},
      total: 0,
      isToggleOn: "",
      touched: false
    };
  }

  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = ItemContext;

  updateBackpackName(name) {
    this.setState({ name: name, touched: true });
  }

  validateBackpackName() {
    const name = this.state.name;
    const backpackName = findBackpackName(
      this.context.backpacks,
      this.state.name
    );

    if (name.length === 0) {
      return "A Backpack Name is required";
    }
    if (backpackName) {
      return "Backpack name already exists";
    }
  }

  validateLoggedIn() {
    if (!TokenService.getUser())
      return "You must be logged in to save a backpack";
  }

  handleClick = (e, category) => {
    this.setState({
      isToggleOn: this.state.isToggleOn === category ? "" : category
    });
    this.setState({
      rotate: this.state.rotate === category ? "" : category
    });
  };

  handleItem = (e, item, category) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const size = e.target.size.value;
    const weight = e.target.weight.value;

    const { useritems } = this.state;
    let oldWeight = 0;
    if (!useritems.hasOwnProperty(category)) {
      useritems[category] = {};
    } else if (useritems[category].hasOwnProperty(item)) {
      oldWeight = useritems[category][item].weight;
    }
    const sumWeight = parseFloat(weight, 10) - oldWeight;

    useritems[category][item] = { brand, size, weight };
    this.setState({ useritems, total: this.state.total + sumWeight });
  };

  handleCreateBackpack = e => {
    e.preventDefault();
    const user_id = TokenService.getUser();
    BackpackApiService.postBackpack(this.state)
      .then(backpack => this.context.addBackpack(backpack))
      .then(this.props.history.push(`/backpacks/${user_id}`));
  };

  render() {
    const items = this.context.items;
    const BackpackNameError = this.validateBackpackName();
    const LoggedInError = this.validateLoggedIn();
    return (
      <>
        <section className="AddBackpack__main">
          <form className="addbackpack_title">
            <label className="_title" htmlFor="backpack title">
              Backpack Title
            </label>
            <input
              className="Title"
              type="text"
              id="backpack name input"
              name="backpack title"
              placeholder="e.g. Backpack One"
              onChange={e => this.updateBackpackName(e.target.value)}
            />
            <ValidationError message={LoggedInError} />
            <ValidationError message={BackpackNameError} />
          </form>
          <div className="addbackpack_items">
            <div className="addbackpack_background"></div>
            <div className="pack inputs">
              {Object.keys(items).map((category, key) => {
                return (
                  <div key={key} className={`${category} category`}>
                    <h4>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className={`category-rotate-${this.state.rotate ===
                          category}`}
                        onClick={e => this.handleClick(e, category)}
                      />
                      {`${category}`}
                    </h4>
                    <section
                      className={`category-display-${this.state.isToggleOn ===
                        category}`}
                    >
                      {items[category].map((item, key) => (
                        <div className="item inputs" key={key}>
                          <form
                            onSubmit={e => this.handleItem(e, item, category)}
                          >
                            <label htmlFor={`${item}-item`}>{item}:</label>
                            <input
                              className="addbackpack_input"
                              type="text"
                              name="brand"
                              placeholder="Brand name or model of gear"
                              required
                            />
                            <input
                              className="addbackpack_input"
                              type="text"
                              name="size"
                              placeholder="Size"
                            />
                            <input
                              className="addbackpack_input"
                              type="number"
                              step="any"
                              name="weight"
                              placeholder="Weight (lbs)"
                              required
                            />
                            <input
                              className="Save Button"
                              type="submit"
                              value="Save"
                              disabled={this.validateBackpackName()}
                            />
                          </form>
                        </div>
                      ))}
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
          <form
            className="bp_form"
            onSubmit={e => this.handleCreateBackpack(e)}
          >
            <div className="total_row">
              <h2>
                <FontAwesomeIcon icon={faDumbbell} />{" "}
              </h2>
              <h2>{this.state.total.toFixed(2)} lbs</h2>
            </div>
            <div className="done_btn_container">
              <button
                className="Done"
                type="submit"
                disabled={this.validateBackpackName()}
              >
                <span>Done</span>
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }
}
