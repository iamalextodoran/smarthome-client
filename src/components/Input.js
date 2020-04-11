import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/input.scss'

export default class Input extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="input-container">
        <input className="field" type={this.props.type} placeholder={this.props.placeholder} autoComplete={this.props.autoComplete}/> 
        <i className={this.props.icon}></i>
        <i className={"dot " + this.props.dot}></i>
      </div>
    )
  }
}
