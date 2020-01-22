import React from 'react';

import logo from './logo.svg';
import './App.css';
import AddOns from './components/AddOns';
import Summary from './components/Summary';

// Data
export const basePrice = 24999
export const salesTax = 0.13
export const addOnOptions = [
  {
    "id" : 1,
    "add_on" : "AWD Drivetrain",
    "price" : 2500
  },
  {
    "id" : 2,
    "add_on" : "GPS Navigation",
    "price" : 2000
  },
  {
    "id" : 3,
    "add_on" : "Winter Tire Package",
    "price" : 2000
  },
  {
    "id" : 4,
    "add_on" : "Sport Package",
    "price" : 3500
  },
  {
    "id" : 5,
    "add_on" : "Live Traffic Updates",
    "price" : 1500
  },
  {
    "id" : 6,
    "add_on" : "Roadside Assistance",
    "price" : 2500
  }
]

// const handleClick = (id) => {
//   addToCart(id);
// }

// Creates a checkbox component for each option listed
const createAddOnOptions = addOnOptions.map(option => {
  return (
    <button className="normalize">
      <AddOns 
        label={option.add_on}
        price={option.price}
        key={option.id}
        id={option.id}
      />
    </button>
  )
})

function App() {
  return (
    <main>
      <div className="img-box">
        <img
          src="images/car.png"
          alt="New car"
          className="car"
        />
      </div>
      <br /><br />
      <h2 className="heading">Add Ons:</h2>
      <div className="add-on--options">
        <br />
        {createAddOnOptions}
      </div>
      <br />
      <h2 className="heading">Price Summary</h2>
      <br />
        <Summary />
    </main>
  );
}

export default App;