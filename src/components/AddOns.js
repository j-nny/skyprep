import React from 'react';

function AddOns({label}) {
  return (
    <div className="add-ons-form">
      <label>
        <input 
          type="checkbox"
          name={label}
        />
        {label}
      </label>
    </div>
  )
}

export default AddOns