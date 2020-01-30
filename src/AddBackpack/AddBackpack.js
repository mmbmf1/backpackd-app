import React from "react";
import ItemContext from "../ItemContext";

export default class AddBackpack extends React.Component {
  static contextType = ItemContext;

  render() {
    // console.log(this.context)
    const items = this.context.items;
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
                name="backpack-title"
                placeholder="Backpack One"
                required
              />
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
                                required
                              />
                              <input
                                type="text"
                                name="backpack-size"
                                id={`${value}-${i}-size`}
                                placeholder="Size"
                                required
                              />
                              <input
                                type="text"
                                name="backpack-weight"
                                id={`${value}-${i}-weight`}
                                placeholder="Weight(g)"
                                required
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
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
        </section>
      </>
    );
  }
}
