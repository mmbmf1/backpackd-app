import React from "react";
import BackpackApiService from "../../services/backpacks-api-service";
import ItemContext from "../../contexts/ItemContext";
import ValidationError from "../../ValidationError";
import { findBackpackName } from "../../backpack-helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Backpack from "../Backpack/Backpack";

export default class EditBackpack extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isReady: false,
  //     // name: "",
  //     // useritems: {},
  //     // total: 0,
  //     isToggleOn: "",
  //     touched: false
  //   };
  // }

  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = ItemContext;

  state = {
    isReady: false,
    name: "",
    useritems: {},
    total: 0,
    isToggleOn: "",
    touched: false
  };

  componentDidMount() {
    const backpackId = this.props.match.params.backpack_id;
    BackpackApiService.getBackpackById(backpackId)
      .then(responseData => {
        this.setState({
          isReady: true,
          // items: this.context.items,
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

  // validateBackpackName() {
  //   const name = this.state.name;
  //   const backpackName = findBackpackName(
  //     this.context.backpacks,
  //     this.state.name
  //   );
  //   if (name.length === 0) {
  //     return "A Backpack Name is required";
  //   }
  //   if (backpackName) {
  //     return "Backpack name already exists";
  //   }
  // }

  handleClick = (e, category) => {
    this.setState({
      isToggleOn: this.state.isToggleOn === category ? "" : category
    });
  };

  getValuesForEdit(category, item) {}

  // handleItem = (e, item, category) => {
  //   e.preventDefault();
  //   const brand = e.target.brand.value;
  //   const size = e.target.size.value;
  //   const weight = e.target.weight.value;

  //   const { useritems } = this.state;
  //   console.log(useritems);

  //   let oldWeight = 0;
  //   if (!useritems.hasOwnProperty(category)) {
  //     useritems[category] = {};
  //   } else if (useritems[category].hasOwnProperty(item)) {
  //     oldWeight = useritems[category][item].weight;
  //   }
  //   const sumWeight = parseFloat(weight, 10) - oldWeight;

  //   useritems[category][item] = { brand, size, weight };
  //   this.setState({ useritems, total: this.state.total + sumWeight });
  // };

  handleEditBackpack = e => {
    e.preventDefault();
    //Backpack service to patch---
    // BackpackApiService.postBackpack(this.state)
    //   .then(backpack => this.context.addBackpack(backpack))
    //   .then(this.props.history.push(`/backpacks`));
  };

  content() {
    const items = this.context.items;
    return (
      <>
        <header>
          <h1>Edit Backpack</h1>
        </header>
        <section>
          <form id="record backpack">
            <div className="form section">
              <label htmlFor="backpack title">Backpack Title</label>
              <input
                className="Title"
                type="text"
                id="backpack name input"
                name="backpack title"
                // value={this.state.name}
                // onChange={e => this.updateBackpackName(e.target.value)}
              />
              {/* <ValidationError message={BackpackNameError} /> */}
            </div>
          </form>
          <div className="form section">
            <h3>Edit Items in Backpack</h3>
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
                          // onSubmit={e => this.handleItem(e, item, category)}
                          >
                            <input type="checkbox" name="checked" />
                            <label htmlFor={`${item}-item`}>{item}:</label>
                            <input
                              className="Input"
                              type="text"
                              name="brand"
                              // defaultValue={console.log(category, item)}
                              defaultValue={this.getValuesForEdit(
                                category,
                                item
                              )}
                              placeholder="Brand"
                              required
                            />
                            <input
                              className="Input"
                              type="text"
                              name="size"
                              placeholder="Size"
                            />
                            <input
                              className="Input"
                              type="number"
                              name="weight"
                              placeholder="Weight (lbs)"
                              required
                            />
                            <input
                              className="Save Button"
                              type="submit"
                              value="Save"
                              // disabled={this.validateBackpackName()}
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
          // onSubmit={e => this.handleEditBackpack(e)}
          >
            <div className="pack list">
              <div className="pack-list-row">
                {/* <h2>Total Weight: {this.state.total.toFixed(2)} lbs</h2> */}
              </div>
            </div>
            <button
              className="Button"
              type="submit"
              // disabled={this.validateBackpackName()}
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
