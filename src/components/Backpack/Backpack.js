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
          {/* <div className="pack_items_background"></div> */}
          {Object.values(items).map((item, index) => {
            return (
              <div className="pack_items" key={index}>
                {Object.keys(item).map((cat, key) => (
                  <div key={key} className="items">
                    <p className="weight">
                      {parseFloat(item[cat].weight).toFixed(2)} lbs
                    </p>
                    {/* <div className="pack items"> */}
                    <p className="brand">{item[cat].brand}</p>
                    {/* <p className="size">{item[cat].size}</p> */}
                    {/* </div> */}
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
