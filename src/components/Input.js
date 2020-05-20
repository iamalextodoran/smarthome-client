import React, { Component } from 'react'
import '../styles/input.scss'

export default class Input extends Component {
  render() {
    return (
      <div className="input-container">
        <input
          className="field"
          id={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          autoComplete={this.props.autoComplete}
          style={{ width: this.props.width, height: this.props.height }}
        />
        <i className={this.props.icon}></i>
        <i className={"dot " + this.props.dot}></i>
      </div>
    )
  }
}
