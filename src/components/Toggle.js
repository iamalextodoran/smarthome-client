import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/toggle.scss'

export default class Toggle extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="wrapper">
        <label className="toggle-row">
          <div className="toggle">
            <input className="state" type="checkbox" name={this.props.name} value={this.props.name}/>
            <div className="indicator"></div>
          </div>
          <div className="text">{this.props.text}</div>
        </label>
      </div>
    )
  }
}