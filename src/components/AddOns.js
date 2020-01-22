import React from 'react';

import '../styles/addOns.css'

// checkbox component for given option
function AddOns({ label, isSelected, price, id }) {
  return (
    <div className="add-on--option">
      {/* <label>
        <input 
          type="checkbox"
          name={label}
          key={id}
          isSelected={isSelected}
        /> */}
        <span className="add-on--name">{label} ${price}</span>
      {/* </label> */}
    </div>
  )
}

export default AddOns