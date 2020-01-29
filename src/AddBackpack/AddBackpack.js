import React from "react";
import ItemContext from "../ItemContext";

export default class AddBackpack extends React.Component {
    static contextType = ItemContext;

  render() {
    // console.log(this.context.items)
    const items = this.context.items
    return (
      <div>
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
                  <div className="pack-item-category">
                    {Object.keys(items).map(function(key){
                        return(<div>
                            <h4>{`${key}`}</h4>
                            {items[key].map(i => (
                                <p>{i}</p>
                            ))} </div>)
                    })}
                    {/* <h4>Backpack Gear</h4> */}
                    <div className="item-inputs">
                      <input type="radio" />
                      <label htmlFor="main-pack">Backpack</label>
                      <input
                        type="text"
                        name="backpack-name"
                        id="item-name"
                        placeholder="Brand name or model of your gear"
                        required
                      />
                      <input
                        type="text"
                        name="backpack-size"
                        id="item-size"
                        placeholder="Size"
                        required
                      />
                      <input
                        type="text"
                        name="backpack-weight"
                        id="item-weight"
                        placeholder="Weight(g)"
                        required
                      />
                    </div>
                    <div className="item-inputs">
                      <input type="radio" />
                      <label htmlFor="backpack-tent">Backpacking Tent</label>

                      <input
                        type="text"
                        name="backpack-tent-name"
                        id="item-name"
                        placeholder="Brand name or model of your gear"
                        required
                      />
                      <input
                        type="text"
                        name="backpack-tent-size"
                        id="item-size"
                        placeholder="Size"
                      />
                      <input
                        type="text"
                        name="backpack-tent-weight"
                        id="item-weight"
                        placeholder="Weight(g)"
                        required
                      />
                    </div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Clothing</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Navigation</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Food & Water</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Cooking & Dining</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Health & Hygiene</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Personal Items</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Emergency Items</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
                  <div className="pack-item-category">
                    <h4>Tools & Repairs</h4>
                    <label htmlFor=""></label>
                    <div className="item-inputs">Item labels & inputs here</div>
                  </div>
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
      </div>
    );
  }
}
