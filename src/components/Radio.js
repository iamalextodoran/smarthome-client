import React, { Component } from 'react'
import '../styles/radio.scss'

export default class Radio extends Component {
  state = {
    checked: this.props.checked,
  }

  handleChange = (event) => {
    this.setState({ checked: !this.state.checked });
    if (typeof this.props.onChange === "function") this.props.onChange();
    this.props.setMode(event.target.checked, event.target.innerHTML);
  }

  render() {
    return (
      <div className="wrapper" value={this.props.value} checked={this.props.checked} onClick={this.handleChange}>
        <input
          className="state"
          type="radio"
          id={this.props.value}
          name={this.props.value}
          value={this.props.value}
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <label className="label">
          <div className="indicator" value={this.props.value}></div>
          <span className="text" value={this.props.value}>{this.props.value}</span>
        </label>
      </div>
    )
  }
}