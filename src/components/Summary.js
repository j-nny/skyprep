import React from 'react';
import { calcConfigPrice, calcDiscountedConfigPrice, calcAdminFee, calcTotalPrice } from '../algorithms/pricing-calculator';
import { basePrice, addOnOptions } from '../App'

function Summary() {
  const configPrice = calcConfigPrice(addOnOptions);
  const discConfigPrice = calcDiscountedConfigPrice(addOnOptions);

  //maps through each configuration selected to show data in summary
  const configs = addOnOptions.map(config => {
    return (
      <tr>
        <th>{config.add_on}</th>
        <td>${config.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
      </tr>
    )
  })
  const adminFee = calcAdminFee(addOnOptions);
  const totalPrice = calcTotalPrice(addOnOptions)

  return (
    <table>
      <tr>
        <th>Base Price</th>
        <td>${basePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
      </tr>
      <br />
      {configs}
      <br />
      { configPrice <= discConfigPrice ? null : 
        <tr>
          <th>Discount</th>
          <td>- ${configPrice - discConfigPrice}</td>
        </tr>}
      <tr>
        <th>Config Total Price</th>
        <td>${discConfigPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
      </tr>
      <br />
      <tr>
        <th>Admin Fee</th>
        <td>${adminFee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
      </tr>
      <tr>
        <th>Total</th>
        <td>${totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
      </tr>
    </table>
  )
}

export default Summary