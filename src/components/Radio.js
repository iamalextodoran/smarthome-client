import React, { Component } from 'react'
import '../styles/radio.scss'

export default class Radio extends Component {
  state = {
    checked: this.props.checked,
  }

  handleChange = (event) => {
    this.setState({ checked: !this.state.checked  });
    if (typeof this.props.onChange === "function") this.props.onChange();
    this.props.setDayMode(this.state.checked);
    this.props.getLightsToggle(this.state.checked);
  }

  render() {
    return (
      <div className="wrapper" checked={this.props.checked} onClick={this.handleChange}>
        <input
          className="state"
          type="radio"
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          checked={this.state.checked}
        />
        <label className="label">
          <div className="indicator"></div>
          <span className="text">{this.props.text}</span>
        </label>
      </div>
    )
  }
}