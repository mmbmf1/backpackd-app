import React from "react";
import uuid from "react-uuid";
import ItemContext from "../ItemContext";
import ValidationError from "../ValidationError";

export default class AddBackpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      name: {
        value: "",
        touched: false
      },
      userItems: {},
      summary: {
        total: [0]
      }
    };
  }

  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = ItemContext;

  updateBackpackName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  validateBackpackName() {
    const name = this.state.name.value;
    if (name.length === 0) {
      return "A Backpack Name is required";
    }
  }

  handleItem = (e, item, category) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const size = e.target.size.value;
    const weight = e.target.weight.value;

    const { userItems } = this.state;

    if (!userItems.hasOwnProperty(category)) {
      userItems[category] = {};
    }
    userItems[category][item] = { brand, size, weight };

    this.setState({ userItems });

    const sumWeight = parseInt(weight, 10);

    this.state.summary.total.push(sumWeight);
  };

  handleCreateBackpack = e => {
    e.preventDefault();
    this.context.addBackpack(this.state);
    this.props.history.push("/backpacks");
  };

  render() {
    const items = this.context.items;
    const BackpackNameError = this.validateBackpackName();
    return (
      <>
        <header>
          <h1>Create New Backpack</h1>
        </header>
        <section>
          <form id="record-backpack">
            <div className="form-section">
              <label htmlFor="backpack-title">Backpack Title</label>
              <input
                type="text"
                id="backpack-name-input"
                name="backpack-title"
                placeholder="Backpack One"
                onChange={e => this.updateBackpackName(e.target.value)}
              />
              <ValidationError message={BackpackNameError} />
            </div>
          </form>
          <div className="form-section">
            <h3>Select Items for Backpack</h3>
            <div className="form-items-section">
              <div className="pack-items">
                {Object.keys(items).map((category, key) => {
                  return (
                    <div key={key} className={`${category}-category`}>
                      <h4>{`${category}`}</h4>
                      {items[category].map((item, key) => (
                        <div className="item-inputs" key={key}>
                          <form
                            onSubmit={e => this.handleItem(e, item, category)}
                          >
                            <input type="checkbox" name="checked" />
                            <label htmlFor={`${item}-item`}>{item}</label>
                            <input
                              type="text"
                              name="brand"
                              placeholder="Brand name or model of gear"
                              required
                            />
                            <input type="text" name="size" placeholder="Size" />
                            <input
                              type="text"
                              name="weight"
                              placeholder="Weight (lbs)"
                              required
                            />
                            <input type="submit" value="Save" />
                          </form>
                        </div>
                      ))}{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <form onSubmit={e => this.handleCreateBackpack(e)}>
            <div className="pack-list" id="">
              <h3>Backpack Summary</h3>
              <div className="pack-list-row" id="pack-weight">
                Total Weight:{" "}
                {this.state.summary.total.reduce((a, b) => a + b, 0)} lbs
              </div>
            </div>
            <input type="submit" value="Done" disable={this.validateBackpackName()}/>
          </form>
        </section>
      </>
    );
  }
}
