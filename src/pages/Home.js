import React, { Component } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Input from '../components/Input'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
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
              value: 30,
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

  render() {
    return (
      <React.Fragment>
        <div className="layout-row layout-align-end-start flex-wrap flex-70">
          <div className="layout-row layout-align-space-between-start flex-wrap">

            {this.state.rooms.map((room) => (
              <div key={room.id} className="card flex-33" style={{ minHeight: "425px" }}>
                <h1>{room.name}</h1>
                <p>{room.description}</p>
                <div className="layout-row layout-align-space-between-center">
                  <div className="layout-column layout-align-none-center flex-60">
                    <img src={room.image} style={{ borderRadius: "20px" }} width="80%" />
                  </div>
                  <div className="layout-column layout-align-start-start flex-30">
                    <p style={{ marginBottom: "-15px" }}>Lights on : 3</p>
                    <p style={{ marginBottom: "-15px" }}>Temperature: {room.Devices[2].value} C</p>
                    <p style={{ marginBottom: "-15px" }}>Blinds {room.Devices[1].value === 0 ? "closed" : "open"}</p>
                    <p>Windows {room.Devices[3].value === 0 ? "closed" : "open"}</p>
                  </div>
                </div>
                <div className="interactions">
                  <NavLink to={`/room/${room.id}`}>
                    <Button raised="true" size="medium" type="primary" text="Get me there" />
                  </NavLink>
                </div>
              </div>
            ), [this.state.rooms])}

            <div id="new" className="card flex-33" style={{ minHeight: "425px" }}>
              <h1>Add new room</h1>
              <Input placeholder="Name" width="75%" />
              <Input placeholder="Description" width="75%" />
              <Input placeholder="Image link" width="75%" />
              <div className="interactions">
                <button className="m_button primary"><Icon icon="fas fa-plus" />Add room</button>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}