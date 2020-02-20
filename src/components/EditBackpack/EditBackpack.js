import React from "react";
import BackpackApiService from "../../services/backpacks-api-service";
import ItemContext from "../../contexts/ItemContext";
import ValidationError from "../../ValidationError";
import TokenService from "../../services/token-service";
import { findBackpackName } from "../../backpack-helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default class EditBackpack extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = ItemContext;

  state = {
    isReady: false
  };

  componentDidMount() {
    const backpackId = this.props.match.params.backpack_id;
    const user_name = TokenService.getUser();
    BackpackApiService.getUserBackpacks(user_name).then(backpacks =>
      this.context.setBackpacks(backpacks)
    );
    BackpackApiService.getBackpackById(backpackId)
      .then(responseData => {
        this.setState({
          isReady: true,
          items: this.context.items,
          id: responseData[0].id,
          name: responseData[0].name,
          useritems: responseData[0].useritems,
          total: responseData[0].total,
          isToggleOn: "",
          touched: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateBackpackName(name) {
    this.setState({ name: name, touched: true });
  }

  validateBackpackName() {
    const name = this.state.name;
    const backpacks = this.context.backpacks.filter(
      backpack => backpack.id !== this.state.id
    );
    const backpackName = backpacks
      ? findBackpackName(backpacks, this.state.name)
      : [];

    if (name.length === 0) {
      return "A Backpack Name is required";
    }
    if (backpackName) {
      return "Backpack name already exists";
    }
  }

  handleClick = (e, category) => {
    this.setState({
      isToggleOn: this.state.isToggleOn === category ? "" : category
    });
  };

  getBrandForEdit(category, item) {
    const { useritems } = this.state;
    let { items } = this.context;
    if (!useritems.hasOwnProperty(category)) {
      useritems[category] = { [category]: items[{ category }] };
    }

    for (const [key, value] of Object.entries(useritems[category])) {
      if (item === key) {
        return value.brand;
      }
    }
  }

  getSizeForEdit(category, item) {
    const { useritems } = this.state;
    let { items } = this.context;
    if (!useritems.hasOwnProperty(category)) {
      useritems[category] = { [category]: items[category] };
    }

    for (const [key, value] of Object.entries(useritems[category])) {
      if (item === key) {
        return value.size;
      }
    }
  }

  getWeightForEdit(category, item) {
    const { useritems } = this.state;
    let { items } = this.context;
    if (!useritems.hasOwnProperty(category)) {
      useritems[category] = { [category]: items[category] };
    }

    for (const [key, value] of Object.entries(useritems[category])) {
      if (item === key) {
        return value.weight;
      }
    }
  }

  handleItem = (e, item, category) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const size = e.target.size.value;
    const weight = e.target.weight.value;

    const { useritems } = this.state;

    let oldWeight = 0;

    if (useritems.hasOwnProperty(category)) {
      useritems[category] = { ...useritems[category] };
    }
    if (useritems[category].hasOwnProperty(item)) {
      oldWeight = useritems[category][item].weight;
    }

    const sumWeight = parseFloat(weight, 10) - oldWeight;

    useritems[category][item] = { brand, size, weight };
    this.setState({
      useritems,
      total: parseFloat(this.state.total, 10) + sumWeight
    });
  };

  handleEditBackpack = e => {
    e.preventDefault();
    BackpackApiService.patchBackpack(this.state)
      .then(backpack => this.context.updateBackpack(backpack))
      .then(this.props.history.push("/backpacks"));
  };

  content() {
    const items = this.context.items;
    const BackpackNameError = this.validateBackpackName();
    return (
      <>
        <section className="EditBackpack__main">
          <form className="editbackpack_title">
            <div className="form section">
              <label className="_title" htmlFor="backpack title">
                Backpack Title
              </label>
              <input
                className="Title"
                type="text"
                id="backpack name input"
                name="backpack title"
                value={this.state.name}
                onChange={e => this.updateBackpackName(e.target.value)}
              />
              <ValidationError message={BackpackNameError} />
            </div>
          </form>
          <div className="editbackpack_items">
            <div className="editbackpack_background"></div>
            <div className="pack inputs">
              {Object.keys(items).map((category, key) => {
                return (
                  <div key={key} className={`${category} category`}>
                    <h4>
                      <FontAwesomeIcon
                        icon={faPlus}
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
                              className="editbackpack_input"
                              type="text"
                              name="brand"
                              defaultValue={this.getBrandForEdit(
                                category,
                                item
                              )}
                              placeholder="Brand"
                              required
                            />
                            <input
                              className="editbackpack_input"
                              type="text"
                              name="size"
                              defaultValue={this.getSizeForEdit(category, item)}
                              placeholder="Size"
                            />
                            <input
                              className="editbackpack_input"
                              type="number"
                              step="any"
                              name="weight"
                              defaultValue={this.getWeightForEdit(
                                category,
                                item
                              )}
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
          <form onSubmit={e => this.handleEditBackpack(e)}>
            <div className="total_row">
              <h2>
                <FontAwesomeIcon icon={faDumbbell} />
                {parseFloat(this.state.total).toFixed(2)} lbs
              </h2>
            </div>
            <button
              className="Done"
              type="submit"
              disabled={this.validateBackpackName()}
            >
              <span>Done</span>
            </button>
          </form>
        </section>
      </>
    );
  }

  render() {
    return <div>{this.state.isReady ? this.content() : null}</div>;
  }
}
