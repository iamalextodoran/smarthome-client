import React, { Component } from 'react'
import '../styles/card.scss'
import Icon from './Icon'
import Toggle from './Toggle'
import Toast, { notify } from './Toast'
import { connect } from 'react-redux'
import { fetchRoomsforUser } from "../actions/roomsActions";
import { editDevice } from "../actions/devicesActions";

class Light extends Component {
  lightSwitch = () => {
    if (this.countAllLightsOn() > 0) {
      this.updateLightsOn(0)
    } else {
      this.updateLightsOn(100)
    }
    notify("Done", "primary");
    this.props.fetchRoomsforUser(1);
  }

  countAllLights = () => {
    let result = 0;
    this.props.rooms.rooms.map(room => {
      result += room.Devices.filter(device => device.type === "Light").length
    })
    return result
  }

  countAllLightsOn = () => {
    let result = 0;
    this.props.rooms.rooms.map(room => {
      result += room.Devices.filter(device => device.type === "Light").filter(light => light.value > 0).length
    })
    return result
  }

  updateLightsOn = (newValue) => {
    let lights = [];
    const data = { value: newValue };
    this.props.rooms.rooms.map((room) => {
      lights = room.Devices.filter(device => device.type === "Light")
      lights.map(item => {
        this.props.editDevice(item.id, data)
      })
    })
  }

  render() {
    return (
      <div className="card">
        <Toast />
        <div className="layout-row layout-align-space-between-center">
          <Icon icon="fas fa-lightbulb" size="40" color={this.countAllLightsOn() > 0 ? "gold" : "grey"} />
          <div className="layout-column layout-align-end-end">
            <h2 style={{ paddingLeft: "5px" }}>Lights</h2>
            <p style={{ marginLeft: "0px", marginTop: "-25px" }}>{this.countAllLightsOn()} out of {this.countAllLights()}</p>
          </div>
          <Toggle id="1" name="lights" onChange={this.lightSwitch} checked={this.countAllLightsOn() > 0 ? true : false} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  devices: state.devices
})

export default connect(mapStateToProps, { fetchRoomsforUser, editDevice })(Light);