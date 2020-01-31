import React from "react";
import ItemContext from "../ItemContext";
import ValidationError from "../ValidationError";

export default class AddBackpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
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
    // console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push('/')
  };

  updateItemName() {

  }

  validateBackpackName() {
    const name = this.state.name.value;
    if (name.length === 0) {
      return "A Backpack Name is required";
    }
  }

  render() {
    // console.log(this.context)
    const items = this.context.items;
    const BackpackNameError = this.validateBackpackName();
    return (
      <>
        <header>
          <h1>Create New Backpack</h1>
        </header>
        <section>
          <form id="record-backpack" onSubmit={this.handleSubmit}>
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
            <div className="form-section">
              <h3>Select Items for Backpack</h3>
              <div className="form-items-section">
                <div className="pack-items">
                  {Object.keys(items).map(function(category, key) {
                    return (
                      <div key={key} className={`${category}-category`}>
                        {/* <button></button> DO I NEED THIS TO EXPAND COLLAPSE?*/}
                        <h4>{`${category}`}</h4>
                        {items[category].map((value, i) => (
                          <>
                            <div className="item-inputs" key={i}>
                              <input type="radio" value={value} />
                              <label htmlFor={`${value}-item`}>{value}</label>
                              <input
                                type="text"
                                name={`${value}-name`}
                                id={`${value}-${i}-name`}
                                placeholder="Brand name or model of gear"
                                // onChange={} function is undefined
                                // required
                              />
                              <input
                                type="text"
                                name="backpack-size"
                                id={`${value}-${i}-size`}
                                placeholder="Size"
                                // required
                              />
                              <input
                                type="text"
                                name="backpack-weight"
                                id={`${value}-${i}-weight`}
                                placeholder="Weight(g)"
                                // required
                              />
                            </div>
                          </>
                        ))}{" "}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="pack-list" id="">
              <h3>Backpack Summary</h3>
              <div className="pack-list-row" id="pack-weight">
                <p>Total Weight:</p>
              </div>
              <div className="pack-list-row" id="weights">
                <p>
                  0.00 kg
                  <br />
                  0.00 oz
                </p>
              </div>
              {/* <div className="pack-list-row" id="pack-functions"></div> */}
            </div>
            <button type="submit" disabled={this.validateBackpackName()}>
              Submit
            </button>
            <button type="reset">Reset</button>
          </form>
        </section>
      </>
    );
  }
}
