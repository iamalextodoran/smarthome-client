import React, { Component } from 'react'
import Slider from './Slider'
import '../styles/button.scss'
import Icon from './Icon'
export default class Blinds extends Component {
  state = {
    temperatures: [
      { id: 3, name: "Temperature", roomId: 1, value: 21, warm: null },
      { id: 16, name: "Temperature", roomId: 2, value: 22, warm: null },
      { id: 26, name: "Temperature", roomId: 3, value: 19, warm: null },
    ]
  }

  componentDidMount() {
    fetch(`http://localhost:3000/devices/temperatures`)
      .then(response => response.json())
      .then(data => this.setState({temperatures: data}))
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <h1>Temperatures</h1>
          <p>control each temperature mode from here + scheduled </p>
          <div className="">
            {this.state.temperatures.map((temperature) => (
              <div key={temperature.id}>
                <p style={{ color: "var(--primary-color)" }}>In room {temperature.roomId}</p>
                <p>Temperature is {temperature.value} °C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
