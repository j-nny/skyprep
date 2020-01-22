import React from 'react';

import '../styles/addOns.css'

const addToCart = (label) => {
  console.log(label)
}

// checkbox component for given option
function AddOns({ label, price, id }) {
  return (
    <div className="add-on--option" onClick={() => addToCart(id)}>
      <span className="add-on--name">{label} ${price}</span>
    </div>
  )
}

export default AddOns