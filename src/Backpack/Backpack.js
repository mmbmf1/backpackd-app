import React from "react";
// import BackpackItem from "./BackpackItem/BackpackItem";
import { findBackpack } from "../backpack-helpers";
import ItemContext from "../ItemContext";

export default class Backpack extends React.Component {
  static contextType = ItemContext;

  handleClick = () => {
    this.props.history.push('/backpacks')
  }

  render() {
    const { backpacks = [] } = this.context;
    const { backpack_id } = this.props.match.params;
    const backpack = findBackpack(backpacks, backpack_id);
    const items = Object.values(backpack.userItems);
    const backpackName = backpack.name.value
    // console.log(backpack.summary.total)
    return (
      <div>
        <div className="backpack-item-list">
          <h1>{backpackName} Contents</h1>
          {Object.values(items).map((item, index) => {
            return (
              <div className='pack categories' key={index}>
                <h4>{Object.keys(item)}:</h4>
                {Object.values(item).map((i, index) => (
                  <div className='pack items' key={index}>
                    <p>{i.brand}</p>
                    <p>{i.size}</p>
                    <p>{i.weight}</p>
                  </div>
                ))}
              </div>
            );
          })}
          {/* <BackpackItem /> */}
        </div>
        <div className="backpack-total-weight"></div>
        <div className='total weight'>
          <h3>Total Weight: {backpack.summary.total.reduce((a, b) => a + b, 0)} lbs</h3>
        </div>
        {/* <button>Edit</button> */}
        <button className='Back Button' onClick={this.handleClick}>Back</button>
      </div>
    );
  }
}
