import React, { Component } from 'react'
import Slider from './Slider'
import Icon from './Icon'

export default class Lights extends Component {
  state = {
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
            id: 20,
            name: "Second light",
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
            value: 100,
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
            value: 100,
            warm: 30,
            createdAt: "2020-05-11T16:51:56.982Z",
            updatedAt: "2020-05-11T16:51:56.982Z",
            RoomId: 3
          },
          {
            id: 29,
            name: "Second light",
            type: "Light",
            description: "",
            value: 100,
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
        {this.state.rooms.map(room => (
          <div>
            <p><strong>{room.name}</strong></p>
            <div className="">
              {room.Devices.filter(device => device.type === "Light").map(light => (
                <div key={light.id}>
                  <p>{light.name}</p>
                  <Slider description="brightness" value={light.value} />
                  <Slider description="warmth" value={light.warm} />
                </div>
              ))}
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
