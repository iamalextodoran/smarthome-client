import React, { Component } from 'react'
import '../styles/radio.scss'

export default class Radio extends Component {
  render() {
    return (
      <div className="wrapper" checked={this.props.checked} onClick={this.props.onClick}>
        <input
          className="state"
          type="radio"
          id={this.props.value}
          name={this.props.value}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <label className="label">
          <div className="indicator"></div>
          <span className="text">{this.props.value}</span>
        </label>
      </div>
    )
  }
}