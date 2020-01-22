import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToSummary } from './actions/summaryActions'

import '../styles/addOns.css'



// checkbox component for given option
class AddOns extends Component{
  render() {

    const handleClick = (id) => {
      this.props.addToSummary(id)
    }

  return (
    <div className="add-on--option" onClick={() => handleClick(this.props.id)}>
      <span className="add-on--name">{this.props.label} ${this.props.price}</span>
    </div>
  )
  }
}

const mapStateToProps = (state)=>{
  return {
    configs: state.configs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addToSummary: (id)=>{dispatch(addToSummary(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOns);