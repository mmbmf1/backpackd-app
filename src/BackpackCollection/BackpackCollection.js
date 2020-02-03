import React from "react";
import { Link } from "react-router-dom";
import ItemContext from '../ItemContext'


export default class BackpackCollection extends React.Component {

  static contextType = ItemContext

  render() {
    const backpacks = this.context.backpacks
    return (
      <div className="backpack-container">
        <section className="card">
          {backpacks.map((backpack, key) =>(
            <div key={key}>
              <h2>
                <Link to={`/backpacks/${backpack.id}`}>{backpack.name.value}</Link>
              </h2>
              <p>Total Weight: {backpack.summary.total.reduce((a, b) => a + b, 0)} lbs</p>
            </div>
          ))}
        </section>
        <br />
        <Link to={'/add_backpack'}>Add Backpack To Collection</Link>
      </div>
    );
  }
}

