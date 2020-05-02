import React, { Component } from 'react'
import Slider from './Slider'
import Icon from './Icon'

export default class Lights extends Component {
  state = {
    lights: [
      { id: 3, name: "Light 1", roomId: 1, value: 80, warm: 30 },
      { id: 4, name: "Light 2", roomId: 1, value: 80, warm: 30 },
      { id: 5, name: "Light 3", roomId: 1, value: 80, warm: 30 },
      { id: 6, name: "Light 4", roomId: 1, value: 80, warm: 30 },
      { id: 16, name: "Light 1", roomId: 2, value: 30, warm: 10 },
      { id: 26, name: "Light 2", roomId: 2, value: 30, warm: 20 },
      { id: 56, name: "Light 3", roomId: 2, value: 30, warm: 60 },
      { id: 36, name: "Light 1", roomId: 3, value: 30, warm: 60 },
    ]
  }

  handleLights = () => {
    this.state.lights.map((light) => light.value = 0)
  }

  eachUniqueRoom = () => {
    const uniqueRooms = [...new Set(this.state.lights.map((room) => room.roomId))];
  
    {this.state.lights.map((light) => (
      (light.roomId!== 1 && console.log('adevarat'))
    ))}
  
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <div>
            <h3>Lights</h3>
            <button className="m_button accent" onClick={this.handleLights}>
              <Icon icon="fas fa-power-off" />
							All lights warm
							</button>
          </div>
          <div className="layout-row layout-align-space-between-start flex-wrap">
            {this.state.lights.map((light) => (
              <div key={light.id} style={{ minWidth: "200px", flex: "50%" }}>
                <p>{light.name}</p>
                <Slider description="brightness" step="10" value={light.value} color="orange" />
                <Slider description="warmth" step="10" value={light.warm} color="hotpink" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
