import React, { Component } from 'react'
import '../styles/slider.scss'

export default class Slider extends Component {
  state = {
    value: 30,
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="layout-column layout-align-center-center">
        <p style={{margin: "-15px"}}>{this.props.description}</p>
        <div className="slider-container layout-row layout-align-center-center">
          <input className="slider" type="range" min={this.props.min} max={this.props.max} onChange={this.handleChange} value={this.state.value} />
          <p style={{paddingTop: "10px"}}>{this.state.value}%</p>
        </div>
      </div>
    )
  }
}
