import React from "react";
import { Link } from "react-router-dom";
import ItemContext from '../ItemContext'

const testBackpack = {
  id: 1,
  name: 'Test Backpack',
  summary: 'Total Weight: 32lbs',
}

export default class BackpackCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backpacks: testBackpack
    }
  }

  static contextType = ItemContext

  render() {
    console.log(this.context.backpacks)
    const backpacks = this.context.backpacks
    return (
      <div className="backpack-container">
        <section className="card">
          <h2>
            <Link to={`/backpacks/${this.state.backpacks.id}`}>{this.state.backpacks.name}</Link>
          </h2>
          <p>{this.state.backpacks.summary}</p>
          <button>Delete</button>
        </section>
        <section className="card">
          {backpacks.map((backpack, key) =>(
            <div key={key}>
              <h2>
                <Link to={`/backpacks/${this.context.backpacks.id}`}>{backpack.name.value}</Link>
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

