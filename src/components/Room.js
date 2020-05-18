import React, { Component } from 'react'
import Left from './Left';
import Top from './Top';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Slider from './Slider';
import Toggle from './Toggle';
import Icon from './Icon';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
              id: 11,
              name: "Small light",
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
            },
            {
              id: 31,
              name: "Back window",
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
              value: 23,
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
              id: 12,
              name: "Temperature",
              type: "Temperature",
              description: "",
              value: 23,
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
  }

  // componentDidMount() {
  //   fetch(`/users/1`)
  //     .then(response => response.json())
  //     .then(data => this.setState({ rooms: data.Rooms }))
  // }
  deleteRoom = (room) => {
    console.log('Deleted ', room.id)
  }

  editRoom = (room) => {
    console.log('Edited ', room.id)
  }

  handleBlinds = () => {

  }

  handleWindows = () => {

  }

  render() {
    const idToMatch = parseInt(this.props.match.params.roomId)
    const room = this.state.rooms.filter(room => room.id === idToMatch)[0];
    const lights = room.Devices.filter(device => device.type === "Light");
    const blinds = room.Devices.filter(device => device.type === "Blind");
    const windows = room.Devices.filter(device => device.type === "Window");

    return (
      <React.Fragment>
        <Top />
        <div className="layout-row layout-xs-column">
          <Left />
          <div className="layout-row layout-align-end-start flex-wrap flex-70">
            {<div className="card">
              <div className="layout-row layout-align-space-between-center">
                <div className="layout-row">
                  <h1>{room.name}</h1>
                  <h3 style={{ marginLeft: "10px" }}>{room.Devices[2].value} °C</h3>
                </div>
                <div>
                  <Icon icon="fas fa-edit" onClick={this.editRoom(room)} />
                  <Icon icon="fas fa-trash" onClick={this.deleteRoom(room)} />
                </div>
              </div>
              <p>{room.description}</p>
              <img src={room.image} style={{ minWidth: "200px", width: "100%", maxWidth: "500px", borderRadius: "20px" }} />
              <div>
                {lights.map(light => (
                  <div>
                    <p>{light.name} </p>
                    <Slider description="brightness" value={light.value} />
                    <Slider description="warmness" value={light.warm} />
                  </div>
                ))}

                {blinds.map(blind => (
                  <div className="layout-row layout-align-space-between-center">
                    <p>{blind.name} {blind.value === 0 ? "closed" : "open"}</p>
                    <Toggle onChange={this.handleBlinds} checked={blind.value === 0 ? false : true} />
                  </div>
                ))}

                {windows.map(window => (
                  <div className="layout-row layout-align-space-between-center">
                    <p>{window.name} {window.value === 0 ? "closed" : "open"}</p>
                    <Toggle onChange={this.handleWindows} checked={window.value === 0 ? false : true} />
                  </div>
                ))}
              </div>
              <div className="interactions">
                <button className="m_button primary"><Icon icon="fas fa-plus" /> Add new device</button>
              </div>
            </div>}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
