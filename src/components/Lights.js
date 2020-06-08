import React, { Component } from 'react'
import Slider from './Slider'
import Icon from './Icon'

export default class Lights extends Component {
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
        {this.props.rooms.map(room => (
          <div>
            <p><strong>{room.name}</strong></p>
            <div className="">
              {room.Devices.filter(device => device.type === "Light").length > 0 ? room.Devices.filter(device => device.type === "Light").map(light => (
                <div key={light.id}>
                  <p>{light.name}</p>
                  <Slider description="brightness" value={light.value} />
                  <Slider description="warmth" value={light.warm} />
                </div>
              )) : <p>No lights in this room</p>}
            </div>
          </div>
        ))}
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
