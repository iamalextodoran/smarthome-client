import React, { Component } from 'react'
import '../styles/menu.scss'
import { NavLink } from "react-router-dom";
import Icon from './Icon';
import Dropdown from './Dropdown';

export default class Menu extends Component {
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
    ]
  }

  // componentDidMount() {
  //   fetch(`/users/1`)
  //     .then(response => response.json())
  //     .then(data => this.setState({ rooms: data.Rooms }))
  // }

  render() {
    return (
      <React.Fragment>
        <div className="menu big layout-row layout-align-end-end">
          <NavLink exact activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/">Home</NavLink>
          <Dropdown name="Rooms">
            {this.state.rooms.map(room => <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to={'../room/' + room.id}>{room.name}</NavLink>)}
            <NavLink className="dropdown-item" to="#"><Icon icon="fas fa-plus" size="15" />Add room</NavLink>
          </Dropdown>
          <NavLink activeClassName="m_button_not_raised primary" className="m_button_not_raised" to="/devices">Devices</NavLink>
        </div>

        <div className="menu small">
          <NavLink exact className="menu-item" activeClassName="menu-item-active" to="/"><Icon icon="fas fa-home" size="25" /></NavLink>
          <Dropdown displayIcon icon="fas fa-square">
            {this.state.rooms.map(room => <NavLink activeClassName="dropdown-active-item" className="dropdown-item" to={'../room/' + room.id}>{room.name}</NavLink>)}
            <NavLink className="dropdown-item" to="#"><Icon icon="fas fa-plus" size="15" />Add room</NavLink>
          </Dropdown>
          <NavLink className="menu-item" activeClassName="menu-item-active" to="/devices"><Icon icon="fas fa-toolbox" size="25" /></NavLink>
        </div>
      </React.Fragment>
    )
  }
}