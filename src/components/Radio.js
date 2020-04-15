import React, { Component } from 'react'
import '../styles/radio.scss'

export default class Radio extends Component {
  render() {
    return (
      <div className="wrapper">
        <input className="state" type="radio" name={this.props.name} id={this.props.name} value={this.props.name}/>
        <label className="label">
          <div className="indicator"></div>
          <span className="text">{this.props.text}</span>
        </label>
      </div>
    )
  }
}