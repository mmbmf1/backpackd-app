import React from "react";
import { Link } from "react-router-dom";
// import Backpack from '../Backpack/Backpack'

function BackpackCollection() {
  return (
    <div className="backpack-container">
      <section className="card">
        <h2>
          <Link to={"/backpack_id"}>Backpack 1</Link>
        </h2>
        <p>32 lbs</p>
        <button>Delete</button>
      </section>
      {/* <section class="card">
        <h2>
          <Link to={"/backpack_id"}>Backpack 2</Link>
        </h2>
        <p>35 lbs</p>
        <button>Delete</button>
      </section>
      <section class="card">
        <h2>
          <Link to={"/backpack_id"}>Backpack 3</Link>
        </h2>
        <p>40 lbs</p>
        <button>Delete</button>
      </section>
      <section class="card">
        <h2>
          <Link to={"/backpack_id"}>Backpack 4</Link>
        </h2>
        <p>45 lbs</p>
        <button>Delete</button>
      </section> */}
    </div>
  );
}

export default BackpackCollection;
