import React from "react";
import { Link } from 'react-router-dom'
// import Backpack from '../Backpack/Backpack'

function BackpackCollection() {
  return (
    <div>
      <h1>Mock backpack collection will go here</h1>
        <Link to={'/backpack_id'}>Backpack 1</Link>
    </div>
  );
}

export default BackpackCollection;
