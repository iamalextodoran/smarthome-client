import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Icon from './Icon'
import Button from './Button'
import Radio from './Radio'

export default class Temperature extends Component {
  state = {
    setTemperature: 22,
    actualTemperature: 24,
    mode: "eco", ///"day" or "night"
  }

  render() {
    return (
      <div className="mini-card">
        <div className="layout-row layout-align-center-center">
          <Icon icon="fas fa-thermometer-empty" size="40" color="deepskyblue" />
          <div>
            <h4><strong>{this.state.actualTemperature}  °C</strong></h4>
            <p style={{ marginTop: "-25px" }}>set {this.state.setTemperature} °C</p>
          </div>
        </div>
        <div className="layout-row layout-align-space-between-center">
          <Radio name="day" text="DAY" />
          <Radio name="eco" text="ECO" />
          <Radio name="night" text="NIGHT" />
        </div>
      </div>
    )
  }
}
