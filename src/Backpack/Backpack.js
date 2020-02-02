import React from 'react'

function Backpack() {
    return (
        <div>
           <div className="backpack-item-list">
          <h1>Backpack Contents</h1>
          <p>Backpack Item #1 and info</p>
          <p>Backpack Item #2 and info</p>
          <p>Backpack Item #3 and info</p>
          <p>Backpack Item #4 and info</p>
          <p>Backpack Item #5 and info</p>
          <p>Backpack Item #6 and info</p>
          <p>Backpack Item #7 and info</p>
          <p>Backpack Item #8 and info</p>
      </div>
      <div className="backpack-total-weight">
          <p>Total Weight</p>
          <p>0.00 kg</p>
          <p>0.00 oz</p>
      </div>
      <button>Edit</button>
      <button>Back</button>
        </div>
    )
}

export default Backpack;