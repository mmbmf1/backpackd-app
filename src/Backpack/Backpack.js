import React from "react";
import BackpackItem from "./BackpackItem/BackpackItem";
import { findBackpack } from "../backpack-helpers";
import ItemContext from "../ItemContext";

export default class Backpack extends React.Component {
  static contextType = ItemContext;

  render() {
    const { backpacks = [] } = this.context;
    const { backpack_id } = this.props.match.params;
    const backpack = findBackpack(backpacks, backpack_id);
    const items = Object.values(backpack.userItems);

    return (
      <div>
        <div className="backpack-item-list">
          <h1>Backpack Contents</h1>
          {Object.values(items).map(item => {
            return (
              <div>
                <h3>{Object.keys(item)}</h3>
                {Object.values(item).map(i => (
                  <div>
                    <p>{i.brand}</p>
                    <p>{i.size}</p>
                    <p>{i.weight}</p>
                  </div>
                ))}
              </div>
            );
          })}
          <BackpackItem />
        </div>
        <div className="backpack-total-weight"></div>
        {/* <button>Edit</button> */}
        <button>Back</button>
      </div>
    );
  }
}
