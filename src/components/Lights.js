import React, { Component } from 'react'
import Slider from './Slider'
import Icon from './Icon'

import { connect } from "react-redux";
import { editDevice } from "../actions/devicesActions";
import { fetchRoomsforUser } from "../actions/roomsActions";

class Lights extends Component {
  componentDidUpdate(prevProps) {
		if (prevProps.rooms !== this.props.rooms) {
      // this.props.fetchRoomsforUser(1)
    }
  }

  handleLights = (data) => {
    this.props.rooms.map(room => room.Devices.filter(device => device.type === "Light").map(light => (this.props.editDevice(light.id, data))))
  }

  handleLight = (device, e) => {
    this.props.editDevice(device.id, { value: e.target.value} )
  }

  render() {
    return (
      <div className="card">
        <h1>Lights</h1>
        {this.props.rooms.map(room => (
          <div key={room.id}>
            <p><strong>{room.name}</strong></p>
            <div className="">
              {room.Devices.filter(device => device.type === "Light").length > 0 ? room.Devices.filter(device => device.type === "Light").map(light => (
                <div key={light.id}>
                  <p>{light.name}</p>
                  <Slider description="brightness" value={light.value} onChange={() => this.handleLight(light)}/>
                  <Slider description="warmth" value={light.warm} onChange={() => this.handleLight(light)}/>
                </div>
              )) : <p>No lights in this room</p>}
            </div>
          </div>
        ))}
        <div className="interactions">
          <button className="m_button accent" onClick={() => this.handleLights({value: 0})}>
            <Icon icon="fas fa-times" />Turn off all lights
            </button>
          <button className="m_button accent" onClick={() => this.handleLights({warm: 100})}>
            <Icon icon="fas fa-fire" />Turn warm all lights
            </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchRoomsforUser, editDevice })(Lights);
