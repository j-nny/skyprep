import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddOns from './components/AddOns';

// Data
const basePrice = 24999
const addOnOptions = [
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

const createAddOnOption = addOn => (
  <AddOns 
    label={addOn.add_on}
    key={addOn.addOn}
  />
)

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
      <section>
        Base Price: $24,999
      </section>
      {createAddOnOptions}
    </main>
  );
}

export default App;