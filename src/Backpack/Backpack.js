import React from "react";
// import BackpackItem from "./BackpackItem/BackpackItem";
import { findBackpack } from "../backpack-helpers";
import ItemContext from "../ItemContext";

export default class Backpack extends React.Component {
  static contextType = ItemContext;

  handleClick = () => {
    this.props.history.push("/backpacks");
  };


  render() {
    const { backpacks = [] } = this.context;
    const { backpack_id } = this.props.match.params;
    const backpack = findBackpack(backpacks, backpack_id);
    const items = backpack ? Object.values(backpack.userItems) : [];
    const backpackName = backpack ? backpack.name.value : '';
    // console.log(Object.keys(backpack.userItems))

    if(!backpack && backpacks.length){
      this.props.history.push("/404");
    }
    return (
      <div>
        <div className="backpack-item-list">
          <h1>{backpackName} Contents</h1>
          {Object.values(items).map((item, index) => {
            return (
              <div className="pack categories" key={index}>
                {Object.keys(item).map((cat, key) => (
                  // console.log(item[cat])
                  <div key={key} className="category">
                    <h4>{cat}:</h4>
                    <div className='pack items'>
                      {" "}
                      <p>{item[cat].brand}</p>
                      <p>{item[cat].size}</p>
                      <p>{item[cat].weight} lbs</p>
                    </div>
                  </div>
                ))}
                {/* {Object.values(item).map((i, index) => (
                  <div className='pack items' key={index}>
                    <p>{i.brand}</p>
                    <p>{i.size}</p>
                    <p>{i.weight}</p>
                  </div>
                ))} */}
              </div>
            );
          })}
          {/* <BackpackItem /> */}
        </div>
        <div className="backpack-total-weight"></div>
        <div className="total weight">
          <h3>
            Total Weight:{" "}
            {backpack ? backpack.summary.total.reduce((a, b) => a + b, 0).toFixed(2): ''} lbs
          </h3>
        </div>
        {/* <button>Edit</button> */}
        <button className="Back Button" onClick={this.handleClick}>
          Back
        </button>
      </div>
    );
  }
}
