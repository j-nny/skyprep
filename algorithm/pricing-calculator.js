// Example car package
const basePrice = 24999
let configurations = [
  {
    "add_on" : "AWD Drivetrain",
    "price" : 2500
  },
  {
    "add_on" : "Sport Package",
    "price" : 3500
  },
  {
    "add_on" : "Roadside Assistance",
    "price" : 2500
  }
]
// Constants for easy access if changes need to be made
const adminBaseFee = 1200
const adminPercentFee = 0.02
const discountMin = 8000
const discount = 0.5
const salesTax = 0.13


// Total price of car including base price and add-ons (w/ applicable discounts)
// Assumes discounts are applied after a monetary amount of $8000 is reached
const calcDiscountedConfigPrice = package => {
  let configPrice = package.reduce((acc, cur) => acc + cur.price, 0)
  return configPrice > discountMin ? discountMin + discount * (configPrice - discountMin) : configPrice
}

// Admin fees are $1,200 + 2% of the fully configured vehicle price (assumes with discount)
const calcAdminFee = package => adminBaseFee + (adminPercentFee * calcDiscountedConfigPrice(package))

// Total price including base price, add-ons, discounts, admin fees, sales tax
const calcTotalPrice = package => {
  let total = (1 + salesTax) * (basePrice + calcDiscountedConfigPrice(package) + calcAdminFee(package))
  let packageAddOns = []
  configurations.forEach(e => packageAddOns.push(e.add_on))
  return `The total cost for this car is ${total.toFixed(2)} with the following configurations: ${packageAddOns.join(', ')}`
}

console.log(calcTotalPrice(configurations))