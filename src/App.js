import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddOns from './components/AddOns';
import Summary from './components/Summary';

// Data
export const basePrice = 24999
export const addOnOptions = [
  {
    "add_on" : "AWD Drivetrain",
    "price" : 2500
  },
  {
    "add_on" : "GPS Navigation",
    "price" : 2000
  },
  {
    "add_on" : "Winter Tire Package",
    "price" : 2000
  },
  {
    "add_on" : "Sport Package",
    "price" : 3500
  },
  {
    "add_on" : "Live Traffic Updates",
    "price" : 1500
  },
  {
    "add_on" : "Roadside Assistance",
    "price" : 2500
  }
]
const adminBaseFee = 1200
const adminPercentFee = 0.02
const discountMin = 8000
const discount = 0.5
const salesTax = 0.13

const createAddOnOptions = addOnOptions.map(option => {
  return (
    <AddOns 
      label={option.add_on}
      key={option.addOn}
    />
  )
})

function App() {
  return (
    <main>
      <img
        src="images/car.png"
        alt="New car"
        height="100rem"
      />
      <br /><br />
      <h3>Add Ons:</h3>
      {createAddOnOptions}
      <br />
      <h3>Payment Summary</h3>
      <Summary />
    </main>
  );
}

export default App;