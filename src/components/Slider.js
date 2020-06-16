import React, { Component } from 'react'
import '../styles/slider.scss'

export default class Slider extends Component {
  render() {
    return (
      <div className="layout-column layout-align-center-center">
        <p style={{ margin: "-15px" }}>{this.props.description}</p>
        <div className="slider-container layout-row layout-align-space-between-center">
          <div style={{ width: "100%" }}>
            <div className="slider-bar shadow" style={{}}></div>
            <div className="slider-bar" style={{ width: this.props.value + "%", background: this.props.color }}></div>
            <input className="slider" type="range" step={this.props.step} min={this.props.min} max={this.props.max} onChange={this.props.onChange} value={this.props.value} style={{ position: "relative" }} />
          </div>
          <p className="slider-value">{this.props.value}%</p>
        </div>
      </div>
    )
  }
}
