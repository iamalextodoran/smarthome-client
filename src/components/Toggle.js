import React, { Component } from 'react'
import '../styles/toggle.scss'

export default class Toggle extends Component {
  render() {
    return (
      <div className="wrapper">
        <label className="toggle-row">
          <div className="toggle">
            <input
              className="state"
              type="checkbox"
              id={this.props.id}
              name={this.props.name}
              checked={this.props.checked}
              onChange={this.props.onChange}
            />
            <div className="indicator"></div>
          </div>
          <div className="text">{this.props.text}</div>
        </label>
      </div>
    )
  }
}