import React, { Component } from 'react'
import Slider from './Slider'
import Icon from './Icon'

export default class Lights extends Component {
  state = {
    lights: [
      {
        id: 1,
        name: "Main light",
        type: "Light",
        description: "",
        value: 100,
        warm: 30,
        createdAt: "2020-05-11T16:51:56.982Z",
        updatedAt: "2020-05-11T16:51:56.982Z",
        RoomId: 1
      },
      {
        id: 5,
        name: "Main light",
        type: "Light",
        description: "",
        value: 100,
        warm: 30,
        createdAt: "2020-05-11T16:51:56.982Z",
        updatedAt: "2020-05-11T16:51:56.982Z",
        RoomId: 2
      },
      {
        id: 9,
        name: "Main light",
        type: "Light",
        description: "",
        value: 100,
        warm: 30,
        createdAt: "2020-05-11T16:51:56.982Z",
        updatedAt: "2020-05-11T16:51:56.982Z",
        RoomId: 3
      }
    ]
  }

  // componentDidMount() {
  //   fetch(`/devices/lights`)
  //     .then(response => response.json())
  //     .then(data => this.setState({ lights: data }))
  // }

  handleLightsBrightness = () => {
    this.state.lights.map((light) => light.value = 0)
  }

  handleLightsWarmness = () => {
    this.state.lights.map((light) => light.value = 0)
  }

  render() {
    return (
      <div className="card">
        <h1>Lights</h1>
        <div className="layout-row layout-align-space-between-start flex-wrap">
          {this.state.lights.map((light) => (
            <div key={light.id} style={{ minWidth: "200px", flex: "50%" }}>
              <p>{light.name}</p>
              <Slider description="brightness" step="10" value={light.value} />
              <Slider description="warmth" step="10" value={light.warm} />
            </div>
          ))}
        </div>
        <div className="interactions">
          <button className="m_button accent" onClick={this.handleLightsBrightness}>
            <Icon icon="fas fa-times" />Turn off all lights
            </button>
          <button className="m_button accent" onClick={this.handleLightsWarmness}>
            <Icon icon="fas fa-fire" />Turn warm all lights
            </button>
        </div>
      </div>
    )
  }
}
