import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromSummary } from './actions/summaryActions'
import { basePrice, salesTax, calcConfigPrice, calcDiscountedConfigPrice, calcAdminFee, calcTotalPrice } from '../algorithms/pricing-calculator';

import '../styles/summary.css'

class Summary extends Component{
  render() {
  const configPrice = calcConfigPrice(this.props.configs);
  const discConfigPrice = calcDiscountedConfigPrice(this.props.configs);

  const handleRemoveClick = id => {
    this.props.removeFromSummary(id)
  }

  //maps through each configuration selected to show data in summary
  const allAddedConfigs = this.props.configs.map(config => {
    return (
      <tr>
        <th className="payment--config">{config.add_on}</th>
        {/* Regexp matches numbers followed by one or more sets of 3 digits, and places a comma */}
        <td className="payment-price--config">(${config.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')})</td>
        <td className="payment-remove--config"><button onClick={() => handleRemoveClick(config.id)}>X</button></td>
      </tr>
    )
  })
  const adminFee = calcAdminFee(this.props.configs);
  const totalPrice = calcTotalPrice(this.props.configs)

  return (
    <div className="summary">
      <table className="summary-content">
        <tbody>
          <tr>
            <th className="payment">Base Price</th>
            <td className="payment-price">${basePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
          </tr>
          {allAddedConfigs}
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
            <th className="payment">Sales Tax</th>
            <td className="payment-price">${(salesTax * (basePrice + discConfigPrice + adminFee)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
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
}

const mapStateToProps = (state) => {
  return {
    configs: state.addedConfigs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeFromSummary: (id) => {dispatch(removeFromSummary(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);