import React, { Component } from 'react'
import '../styles/card.scss'
import Icon from './Icon'
import Toggle from './Toggle'
import Toast, { notify } from './Toast'
import { connect } from 'react-redux'
import { fetchRooms } from "../actions/roomsActions";

class Light extends Component {
  state = {
    isAnyLightOn: true,
    lightsOn: 21,
    totalLights: 30,
  }
  
  componentDidUpdate() {
    this.countAllLightsOn()
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

  updateLightsOn = (newValue) => {
    let id = [];
    const data = { value: newValue };
    this.props.rooms.rooms.map((room) => {
      id = room.Devices.filter(device => device.type === "Light")
      id.map(item => {
        fetch('devices/' + item.id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then(response => response.json())
          .then(data => console.log('Success:', data))
          .catch(error => console.error('Error:', error));
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

export default connect(mapStateToProps, { fetchRooms })(Light);