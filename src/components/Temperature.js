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

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedMode: changeEvent.target.value
    });
    console.log(changeEvent)
  }

  setDayMode = (item) => {
    console.log(item);
    this.setState({selectedMode: item})
  }
  
  setEcoMode = (item) => {
    console.log(item);
    this.setState({selectedMode: item})
  }

  setNightMode = (item) => {
    console.log(item);
    this.setState({selectedMode: item})
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
          <Radio checked={this.state.selectedMode === 'Day'} id="1" name="Day" text="Day" value="Day" onChange={this.setDayMode}/>
          <Radio checked={this.state.selectedMode === 'Night'} id="2" name="Night" text="Night" value="Night" />
          <Radio checked={this.state.selectedMode === 'Eco'} id="3" name="Eco" text="Eco" value="Eco"/>
        </div>
      </div>
    )
  }
}