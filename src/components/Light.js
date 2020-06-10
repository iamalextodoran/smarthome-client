import React, { Component } from 'react'
import '../styles/card.scss'
import Icon from './Icon'
import Toggle from './Toggle'
import Toast, { notify } from './Toast'
import { connect } from 'react-redux'
import { fetchRooms } from "../actions/roomsActions";
import { editDevice } from "../actions/devicesActions";

class Light extends Component {
  state = {
    isAnyLightOn: true,
  }

  lightSwitch = () => {
    if (this.countAllLightsOn() > 0) {
      notify("Done", "primary")
      this.updateLightsOn(0)
    } else {
      this.updateLightsOn(100)
    }
    this.setState({ isAnyLightOn: !this.state.isAnyLightOn })
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

  // countOnlyOnLights = (on) => {
  //   let result = 0;
  //   this.props.rooms.rooms.map(room => {
  //     !on ? result += room.Devices.filter(device => device.type === "Light").filter(light => light.value > 0).length : result += room.Devices.filter(device => device.type === "Light").length
  //   })
  //   return result
  // }

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
          <Icon icon="fas fa-lightbulb" size="40" color={this.state.isAnyLightOn ? "grey" : "gold"} />
          <div className="layout-column layout-align-end-end">
            <h2 style={{ paddingLeft: "5px" }}>Lights</h2>
            <p style={{ marginLeft: "0px", marginTop: "-25px" }}>{this.countAllLightsOn()} out of {this.countAllLights()}</p>
          </div>
          <Toggle id="1" name="lights" onChange={this.lightSwitch} checked={this.state.isAnyLightOn} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
})

export default connect(mapStateToProps, { fetchRooms, editDevice })(Light);