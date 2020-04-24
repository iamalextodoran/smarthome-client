import React, { Component } from 'react'
import '../styles/toggle.scss'

export default class Toggle extends Component {
  state = {
    checked: this.props.currentValue,
  };

  onChange = e => {
    this.setState({
      checked: e.target.checked
    });
    if (typeof this.props.onChange === "function") this.props.onChange();
    this.props.getLightsToggle(this.state.checked);
  };

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
              checked={this.props.currentValue}
              onChange={this.onChange}
            />
            <div className="indicator"></div>
          </div>
          <div className="text">{this.props.text}</div>
        </label>
      </div>
    )
  }
}