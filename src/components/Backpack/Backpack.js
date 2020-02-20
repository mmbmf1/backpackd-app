import React from "react";
import { findBackpack } from "../../backpack-helpers";
import ItemContext from "../../contexts/ItemContext";

export default class Backpack extends React.Component {
  static contextType = ItemContext;

  render() {
    const backpacks = this.context.backpacks;
    const backpack_id = this.props.id;
    const backpack = findBackpack(backpacks, backpack_id);
    const items = backpack ? Object.values(backpack.useritems) : [];

    if (!backpack && backpacks.length) {
      this.props.history.push("/404");
    }

    return (
      <div>
        <div className="backpack_item_list">
          <div className="pack_items_background"></div>
          {Object.values(items).map((item, index) => {
            return (
              <div className="pack categories" key={index}>
                {Object.keys(item).map((cat, key) => (
                  <div key={key} className="category">
                    <h4>{cat}:</h4>
                    <div className="pack items">
                      <p>{item[cat].brand}</p>
                      <p>{item[cat].size}</p>
                      <p>{item[cat].weight} lbs</p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="backpack-total-weight"></div>
      </div>
    );
  }
}
