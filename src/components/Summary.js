import React from 'react';
import { calcConfigPrice, calcDiscountedConfigPrice, calcAdminFee, calcTotalPrice } from '../algorithms/pricing-calculator';
import { basePrice, addOnOptions } from '../App'

import '../styles/summary.css'

function Summary() {
  const configPrice = calcConfigPrice(addOnOptions);
  const discConfigPrice = calcDiscountedConfigPrice(addOnOptions);

  //maps through each configuration selected to show data in summary
  const configs = addOnOptions.map(config => {
    return (
      <tr>
        <th className="payment--config">{config.add_on}</th>
        {/* Regexp matches numbers followed by one or more sets of 3 digits, and places a comma */}
        <td className="payment-price--config">(${config.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')})</td>
      </tr>
    )
  })
  const adminFee = calcAdminFee(addOnOptions);
  const totalPrice = calcTotalPrice(addOnOptions)

  return (
    <div className="summary">
      <table className="summary-content">
        <tbody>
          <tr>
            <th className="payment">Base Price</th>
            <td className="payment-price">${basePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
          {configs}
          { configPrice <= discConfigPrice ? null : 
            <tr>
              <th className="payment--config">*** Discount ***</th>
              <td className="payment-price--config">(-${configPrice - discConfigPrice})</td>
            </tr>}
          <tr>
            <th className="payment">Configurations Price</th>
            <td className="payment-price">${discConfigPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
          <tr>
            <th className="payment">Administration Fee</th>
            <td className="payment-price">${adminFee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
          <tr>
            <th className="payment">Total</th>
            <td className="payment-price">${totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Summary