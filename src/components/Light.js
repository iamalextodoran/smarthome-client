import React, { Component } from 'react'
import '../styles/card.scss'
import Icon from './Icon'
import Toggle from './Toggle'
import Toast, { notify } from './Toast'
import { useRouteMatch } from 'react-router-dom'

export default class Light extends Component {
  state = {
    isAnyLightOn: true,
    lightsOn: 21,
    totalLights: 30,
    rooms: [
      {
        id: 1,
        name: "Johns room",
        description: "My bedroom",
        image: "https://source.unsplash.com/JIUjvqe2ZHg",
        createdAt: "2020-05-11T16:51:56.974Z",
        updatedAt: "2020-05-11T16:51:56.974Z",
        UserId: 1,
        Devices: [
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
            id: 4,
            name: "Temperature",
            type: "Temperature",
            description: "",
            value: 23,
            warm: 20,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 1
          },
          {
            id: 2,
            name: "Blinds",
            type: "Blind",
            description: "",
            value: 50,
            warm: 0,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 1
          },
          {
            id: 3,
            name: "Windows",
            type: "Window",
            description: "",
            value: 50,
            warm: 0,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 1
          }
        ]
      },
      {
        id: 2,
        name: "Living room",
        description: "My living room",
        image: "https://source.unsplash.com/17NCG_wOkMY",
        createdAt: "2020-05-11T16:51:56.974Z",
        updatedAt: "2020-05-11T16:51:56.974Z",
        UserId: 1,
        Devices: [
          {
            id: 5,
            name: "Main light",
            type: "Light",
            description: "",
            value: 0,
            warm: 30,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 2
          },
          {
            id: 5,
            name: "Second light",
            type: "Light",
            description: "",
            value: 10,
            warm: 30,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 2
          },
          {
            id: 5,
            name: "Desk light",
            type: "Light",
            description: "",
            value: 10,
            warm: 30,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 2
          },
          {
            id: 6,
            name: "Blinds",
            type: "Blind",
            description: "",
            value: 20,
            warm: 0,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 2
          },
          {
            id: 8,
            name: "Temperature",
            type: "Temperature",
            description: "",
            value: 31,
            warm: 20,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 2
          },
          {
            id: 7,
            name: "Windows",
            type: "Window",
            description: "",
            value: 30,
            warm: 0,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 2
          }
        ]
      },
      {
        id: 3,
        name: "Guest room",
        description: "My guest room",
        image: "https://source.unsplash.com/gREquCUXQLI",
        createdAt: "2020-05-11T16:51:56.974Z",
        updatedAt: "2020-05-11T16:51:56.974Z",
        UserId: 1,
        Devices: [
          {
            id: 9,
            name: "Main light",
            type: "Light",
            description: "",
            value: 0,
            warm: 30,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 3
          },
          {
            id: 12,
            name: "Temperature",
            type: "Temperature",
            description: "",
            value: 13,
            warm: 20,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 3
          },
          {
            id: 10,
            name: "Blinds",
            type: "Blind",
            description: "",
            value: 0,
            warm: 0,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 3
          },
          {
            id: 11,
            name: "Windows",
            type: "Window",
            description: "",
            value: 0,
            warm: 0,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 3
          }
        ]
      }
    ],
  }


  componentWillMount() {
    fetch(`/rooms`)
      .then(response => response.json())
      .then(data => this.setState({ rooms: data }));
    this.setState({ isAnyLightOn: this.countAllLightsOn() > 0 ? true : false })
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
    this.state.rooms.map(room => {
      result += room.Devices.filter(device => device.type === "Light").length
    })
    return result
  }

  countAllLightsOn = () => {
    let result = 0;
    this.state.rooms.map(room => {
      result += room.Devices.filter(device => device.type === "Light").filter(light => light.value > 0).length
    })
    return result
  }

  updateLightsOn = (newValue) => {
    let id = [];
    const data = { value: newValue };
    this.state.rooms.map(room => {
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