import React, { Component } from 'react'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Left from '../components/Left';

export default class Rooms extends Component {
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

  render() {
    return (
      <React.Fragment>
        <Top />
        <div className="layout-row layout-xs-column">
          <Left />
          <div className="layout-row layout-align-end-start flex-wrap flex-70">
            <div className="layout-row layout-align-space-between-start flex-wrap">
              {this.state.rooms.map((room) => (
                <div key={room.id} className="card">
                  <h1>{room.name}</h1>
                  <p>{room.description}</p>

                  <img src={room.image} style={{ minWidth: "200px", width: "100%", maxWidth: "500px", borderRadius: "20px" }} />
                  <div style={{ marginLeft: "20px" }}>
                    <p style={{ marginBottom: "-15px" }}>Lights on : 3</p>
                    <p style={{ marginBottom: "-15px" }}>Temperature: 20 C</p>
                    <p style={{ marginBottom: "-15px" }}>Windws open</p>
                    <p>Blinds open</p>
                  </div>

                  <div className="interactions" style={{ marginTop: "-20px" }}>
                    <NavLink to={`/room/${room.id}`}>
                      <Button raised="true" size="medium" type="primary" text="Get me there" />
                    </NavLink>
                  </div>
                </div>
              ), [this.state.rooms])}
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
