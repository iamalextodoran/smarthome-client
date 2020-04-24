import React, { Component } from 'react'
import '../styles/mini-card.scss'
import Icon from './Icon'
import Button from './Button'
import Radio from './Radio'

export default class Temperature extends Component {
  state = {
    setTemperature: 22,
    actualTemperature: 24,
    selectedMode: 'Eco',
    setTemperatureEco: 16,
    setTemperatureDay: 19,
    setTemperatureNight: 22,
  }

  setMode = (state, item) => {
    let setThis;
    !state? this.setState({selectedMode: item}): this.setState({selectedMode: this.state.selectedMode});
    if (item === 'Eco') {
      setThis = this.state.setTemperatureEco;
    } else if (item === 'Day') {
      setThis = this.state.setTemperatureDay;
    } else if (item === 'Night') {
      setThis = this.state.setTemperatureNight;
    }
    this.setState({setTemperature: setThis});
  }

  setColor = () => {
    if (this.state.selectedMode === 'Day') {
      return "deeppink"
    } else if (this.state.selectedMode === 'Night') {
      return "crimson"
    } else return "deepskyblue"
  }

  render() {
    return (
      <div className="mini-card">
        <div className="layout-row layout-align-center-center">
          <Icon icon={this.state.selectedMode === 'Eco'? 'fas fa-thermometer-empty' : 'fas fa-thermometer-half'} size="40" color={this.setColor()} />
          <div>
            <h4><strong>{this.state.actualTemperature}  °C</strong></h4>
            <p style={{ marginTop: "-25px" }}>set {this.state.setTemperature} °C</p>
          </div>
        </div>
        <div className="layout-row layout-align-space-between-center">
          <Radio checked={this.state.selectedMode === 'Day'} text="Day" value="Day" setMode={this.setMode}/>
          <Radio checked={this.state.selectedMode === 'Eco'} text="Eco" value="Eco" setMode={this.setMode}/>
          <Radio checked={this.state.selectedMode === 'Night'} text="Night" value="Night" setMode={this.setMode}/>
        </div>
      </div>
    )
  }
}